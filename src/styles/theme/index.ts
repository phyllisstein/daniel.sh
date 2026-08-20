import * as animation from "./animation";
import * as ease from "./ease";
import * as elevation from "./elevation";
import * as paletteBrands from "./palette-brands";
import * as paletteDark from "./palette-spectrum-dark";
import * as paletteLight from "./palette-spectrum-light";
import * as paletteMac from "./palette-macintosh-wallpaper";
import * as plumber from "./plumber";
import * as respondTo from "./respond-to";
import * as scale from "./scale";
import * as typeface from "./typeface";

const THEME = {
    animation,
    ease,
    elevation,
    paletteBrands,
    palette: paletteDark,
    paletteDark,
    paletteLight,
    paletteMac,
    plumber,
    respondTo,
    scale,
    typeface,
};

type CustomTheme = typeof THEME;

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
}

export default THEME;
