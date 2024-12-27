import { formatCss, inGamut, converter, parse, clampGamut, toGamut } from "culori";
import * as R from "ramda";
import _ from "lodash";

export const toLCH = converter("oklch");
export const toP3 = toGamut("p3", "oklch");
const round = _.partial(_.round, _.partial.placeholder, 3);
export const maxOutP3 = R.pipe(
    parse,
    toLCH,
    R.assoc("c", 1500),
    toP3,
    R.map(round),
    R.assoc("mode", "p3"),
    formatCss,
);
