import { formatCss, inGamut, converter, parse } from "culori";

const toLCH = converter("oklch");
const toP3 = converter("p3");
const inP3Gamut = inGamut("p3");

function findMaxChroma(l: number, h: number): number {
    let lower = 0;
    let upper = 150;
    let maxChroma = 0;

    // Perform a binary search to find the maximum chroma
    for (let i = 0; i < 20; i++) {
        const mid = (lower + upper) / 2;
        const color = { c: mid, h, l, mode: "oklch" };
        if (inP3Gamut(color)) {
            maxChroma = mid;
            lower = mid;
        } else {
            upper = mid;
        }
    }

    return maxChroma;
}

export function rgbToP3(rgb: string): string {
    const color = parse(rgb);
    const lchColor = toLCH(color);
    const originalP3 = formatCss(toP3(color), { format: "p3" });

    if (
        !lchColor
        || typeof lchColor.l !== "number"
        || typeof lchColor.h !== "number"
    ) {
        return rgb;
    }

    let { c: originalC, h, l } = lchColor;
    const maxChroma = findMaxChroma(lchColor.l, lchColor.h);

    if (originalC > maxChroma) {
        const maxChromaColor = { c: maxChroma, h, l, mode: "oklch" };
        const p3Color = toP3(maxChromaColor);
        const cssColor = formatCss(p3Color, { format: "p3" });
        // return [originalP3, cssColor, cssColor, cssColor]
        return originalP3;
    }

    const steps = 3;
    const chromaValues = [];
    for (let i = 0; i < steps; i++) {
        const newC = originalC + ((maxChroma - originalC) * i) / steps;
        const color = { c: newC, h, l, mode: "oklch" };
        const p3Color = toP3(color);
        const cssColor = formatCss(p3Color, { format: "p3" });
        chromaValues.push(cssColor);
    }
    return originalP3;
}
