/**
 * Regenerates the `oklch` blocks in src/styles/theme/palette-*.ts.
 *
 * Each colour's `rgb` entry is the source of truth. We convert it to OKLCh,
 * keep its lightness exactly, keep its hue (with a small stabilisation pass,
 * see below), and push its chroma out to the Display-P3 gamut boundary. The
 * `rgb` blocks are never touched -- they remain the sRGB fallback, and on an
 * sRGB display the browser gamut-maps the oklch values back down to roughly
 * where they started.
 *
 * Run:  node scripts/generate-palette-oklch.js [--dry]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const THEME_DIR = path.resolve(fileURLToPath(import.meta.url), "../../src/styles/theme");
const DRY = process.argv.includes("--dry");
const DEG = 180 / Math.PI;
const RAD = Math.PI / 180;

const TARGETS = [
    { file: "palette-spectrum-light.ts", stabilise: true },
    { file: "palette-spectrum-dark.ts", stabilise: true },
    // 18 independent named colours rather than ramps, so there are no
    // neighbouring steps to stabilise a hue against.
    { file: "palette-macintosh-wallpaper.ts", stabilise: false },
    { file: "palette-brands.ts", stabilise: false },
];

/* -------------------------------------------------------------------------- */
/* colour space conversions                                                    */
/* -------------------------------------------------------------------------- */

const mul = (M, v) => M.map((row) => row[0] * v[0] + row[1] * v[1] + row[2] * v[2]);

const linearize = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

/** sRGB (0-255) -> OKLab, using Ottosson's fused reference matrices. */
function srgbToOklab(r8, g8, b8) {
    const r = linearize(r8 / 255);
    const g = linearize(g8 / 255);
    const b = linearize(b8 / 255);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [
        0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s,
    ];
}

const LAB_TO_LMS = [
    [1, 0.3963377774, 0.2158037573],
    [1, -0.1055613458, -0.0638541728],
    [1, -0.0894841775, -1.2914855480],
];
const LMS_TO_XYZ = [
    [1.2268798758, -0.5578149944, 0.2813910456],
    [-0.0405757452, 1.1122868032, -0.0717110580],
    [-0.0763729366, -0.4214933324, 1.5869240198],
];
const XYZ_TO_P3 = [
    [2.4934969119, -0.9313836179, -0.4027107845],
    [-0.8294889696, 1.7626640603, 0.0236246858],
    [0.0358458302, -0.0761723893, 0.9568845240],
];

function inP3(L, C, H) {
    const a = C * Math.cos(H * RAD);
    const b = C * Math.sin(H * RAD);
    const lms = mul(LAB_TO_LMS, [L, a, b]).map((x) => x ** 3);
    return mul(XYZ_TO_P3, mul(LMS_TO_XYZ, lms)).every((c) => c >= 0 && c <= 1);
}

/**
 * Highest chroma displayable in P3 at this lightness and hue.
 *
 * Bisected rather than solved: the OKLCh gamut boundary is the image of the
 * RGB cube's surface under a cube-root transform, so it is a lumpy hull with
 * cusps at the primaries and has no closed form. `lo` stays in-gamut by
 * construction, so the result is always safe.
 */
function maxChromaP3(L, H) {
    let lo = 0;
    let hi = 0.5;
    for (let i = 0; i < 48; i += 1) {
        const mid = (lo + hi) / 2;
        if (inP3(L, mid, H)) lo = mid;
        else hi = mid;
    }
    return lo;
}

/* -------------------------------------------------------------------------- */
/* hue stabilisation                                                           */
/* -------------------------------------------------------------------------- */

/**
 * 8-bit sRGB quantisation leaves a noise floor of roughly +/-0.002 on the OKLab
 * a/b axes. A step's hue uncertainty is that floor divided by its chroma, so
 * below C ~= 0.05 (about +/-2.3deg) a measured hue stops being trustworthy --
 * and once we boost chroma toward the gamut boundary, an untrustworthy hue
 * stops being invisible too.
 */
const TRUST_CHROMA = 0.05;

/** 0 = keep this step's own hue, 1 = adopt the reference's hue entirely. */
function hueBlendWeight(chroma) {
    const t = Math.min(1, Math.max(0, chroma / TRUST_CHROMA));
    return 1 - t * t * (3 - 2 * t); // smoothstep, so the ramp has no kink at the threshold
}

/**
 * Blend on the unit (a, b) vector rather than the scalar angle. Averaging
 * degrees would send hues straddling the 0/360 seam -- magenta does -- to the
 * opposite side of the colour wheel.
 */
function blendHue(hue, referenceHue, weight) {
    const x = (1 - weight) * Math.cos(hue * RAD) + weight * Math.cos(referenceHue * RAD);
    const y = (1 - weight) * Math.sin(hue * RAD) + weight * Math.sin(referenceHue * RAD);
    const deg = Math.atan2(y, x) * DEG;
    return deg < 0 ? deg + 360 : deg;
}

/* -------------------------------------------------------------------------- */
/* parsing and formatting                                                      */
/* -------------------------------------------------------------------------- */

function hslToRgb(h, s, l) {
    const S = s / 100;
    const L = l / 100;
    const k = (n) => (n + h / 30) % 12;
    const a = S * Math.min(L, 1 - L);
    const f = (n) => L - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0), f(8), f(4)].map((v) => Math.round(v * 255));
}

/** Reads the `rgb` block into ordered records, tolerating rgb() or hsl(). */
function readSource(src) {
    const from = src.indexOf("export const rgb");
    const block = src.slice(from, src.indexOf("};", from));
    const records = [];

    for (const match of block.matchAll(/^\s+(\w+):\s*"(rgb|hsl)\(([^)]+)\)"/gm)) {
        const [, key, fn, args] = match;
        const nums = args.split(",").map((v) => parseFloat(v));
        const [r, g, b] = fn === "rgb" ? nums : hslToRgb(nums[0], nums[1], nums[2]);
        const [L, a, bb] = srgbToOklab(r, g, b);
        let H = Math.atan2(bb, a) * DEG;
        if (H < 0) H += 360;
        records.push({ key, family: key.replace(/\d+$/, ""), L, C: Math.hypot(a, bb), H });
    }

    return records;
}

/**
 * Formats to 4dp, stepping chroma inward if rounding pushed it back out of P3.
 * Nearly every value here sits exactly on the gamut boundary, so symmetric
 * rounding would send about half of them outside it.
 */
function format(L, C, H) {
    if (C === 0) return `oklch(${Number(L.toFixed(4))} 0 0)`;

    const l = Number(L.toFixed(4));
    const h = Number(H.toFixed(2));
    let c = Number(C.toFixed(4));
    while (c > 0 && !inP3(l, c, h)) c = Number((c - 0.0001).toFixed(4));

    return `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(2)})`;
}

/* -------------------------------------------------------------------------- */
/* generation                                                                  */
/* -------------------------------------------------------------------------- */

function generate(records, { stabilise }) {
    const byFamily = new Map();
    for (const record of records) {
        if (!byFamily.has(record.family)) byFamily.set(record.family, []);
        byFamily.get(record.family).push(record);
    }

    /**
     * Stabilise against the *adjacent* step with more chroma, not the family's
     * most chromatic step. These ramps have smooth, deliberate hue drift
     * (Spectrum was authored perceptually), so pulling a pale tint all the way
     * to a global anchor would jump it past its own neighbours. Blending
     * locally corrects a genuinely noisy hue while preserving ramp order.
     */
    const referenceFor = (record) => {
        const siblings = byFamily.get(record.family);
        const i = siblings.indexOf(record);
        const neighbours = [siblings[i - 1], siblings[i + 1]].filter(Boolean);
        const best = neighbours.reduce((a, b) => (!a || b.C > a.C ? b : a), null);
        return best && best.C > record.C ? best : null;
    };

    return records.map((record) => {
        if (record.C < 1e-6) return { ...record, out: format(record.L, 0, 0) };

        const reference = stabilise ? referenceFor(record) : null;
        const hue = reference ? blendHue(record.H, reference.H, hueBlendWeight(record.C)) : record.H;
        const chroma = maxChromaP3(record.L, hue);

        return { ...record, hue, chroma, out: format(record.L, chroma, hue) };
    });
}

const renderBlock = (rows) =>
    `export const oklch = {\n${rows.map((r) => `    ${r.key}: "${r.out}",`).join("\n")}\n};\n`;

/* -------------------------------------------------------------------------- */
/* verification                                                                */
/* -------------------------------------------------------------------------- */

function verify(name, rows) {
    const problems = [];
    const warnings = [];

    for (const r of rows) {
        const match = r.out.match(/oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)/);
        const [L, C, H] = match ? match.slice(1).map(Number) : [Number(r.out.match(/[\d.]+/)[0]), 0, 0];

        if (C > 0 && !inP3(L, C, H)) problems.push(`${r.key}: outside P3`);
        if (Math.abs(L - r.L) > 0.00005) problems.push(`${r.key}: L drifted, ${r.L} -> ${L}`);

        // Below the trust threshold we deliberately re-hue the step, and max
        // chroma depends on hue as well as lightness -- so a near-neutral can
        // shed a sliver of chroma. A fall on a step we did NOT re-hue is a bug.
        const allowance = r.C >= TRUST_CHROMA ? 0.0002 : 0.005;
        if (C + 1e-9 < r.C - allowance) problems.push(`${r.key}: chroma fell, ${r.C} -> ${C}`);
    }

    const byFamily = new Map();
    for (const r of rows) {
        if (!byFamily.has(r.family)) byFamily.set(r.family, []);
        byFamily.get(r.family).push(r);
    }

    // Stabilisation must never reorder a family's hue ramp. Count direction
    // changes in consecutive circular deltas; we are not allowed to add any.
    const signFlips = (hues) => {
        const delta = (a, b) => ((b - a + 540) % 360) - 180;
        let flips = 0;
        for (let i = 2; i < hues.length; i += 1) {
            if (delta(hues[i - 2], hues[i - 1]) * delta(hues[i - 1], hues[i]) < 0) flips += 1;
        }
        return flips;
    };

    for (const [family, rs] of byFamily) {
        const hued = rs.filter((r) => r.hue !== undefined && r.C >= 1e-6);
        if (hued.length >= 3) {
            const before = signFlips(hued.map((r) => r.H));
            const after = signFlips(hued.map((r) => r.hue));
            if (after > before) problems.push(`${family}: hue ramp reordered (${before} -> ${after} flips)`);
        }

        // A non-monotonic lightness ramp means the *source* rgb block has a bad
        // value. We still emit it faithfully, but say so rather than smooth it.
        if (rs.length < 3) continue;
        const ls = rs.map((r) => r.L);
        const up = ls.every((v, i) => i === 0 || v > ls[i - 1]);
        const down = ls.every((v, i) => i === 0 || v < ls[i - 1]);
        if (up || down) continue;

        const culprits = rs
            .filter((r, i) => i > 0 && i < rs.length - 1 && (r.L - rs[i - 1].L) * (rs[i + 1].L - r.L) < 0)
            .map((r) => r.key);
        warnings.push(`${family}: L ramp not monotonic (source rgb suspect at ${culprits.join(", ")})`);
    }

    console.log(
        problems.length
            ? `FAIL ${name}\n  ${problems.join("\n  ")}`
            : `ok   ${name} (${rows.length} colours)`,
    );
    for (const w of warnings) console.log(`  warn ${w}`);

    return problems.length === 0;
}

/* -------------------------------------------------------------------------- */

let ok = true;

for (const { file, stabilise } of TARGETS) {
    const filePath = path.join(THEME_DIR, file);
    const src = fs.readFileSync(filePath, "utf8");
    const rows = generate(readSource(src), { stabilise });

    ok = verify(file, rows) && ok;
    if (DRY) continue;

    const block = renderBlock(rows);
    const start = src.indexOf("export const oklch = {");

    if (start === -1) {
        fs.writeFileSync(filePath, `${src.trimEnd()}\n\n${block}`);
    } else {
        const end = src.indexOf("};", start) + 3;
        fs.writeFileSync(filePath, src.slice(0, start) + block + src.slice(end).replace(/^\n/, ""));
    }
}

if (!ok) process.exitCode = 1;
