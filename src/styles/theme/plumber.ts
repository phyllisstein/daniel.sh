import _ from 'lodash'
import { css } from 'styled-components'
import { stripUnit } from 'polished'
import { unitless } from './scale'

interface PlumberBaseOpts {
  fontSize?: number
  gridHeight?: string
  leadingBottom?: number
  leadingTop?: number
  lineHeight?: number
  useBaselineOrigin?: boolean
}

export interface GetPlumberOpts extends PlumberBaseOpts {
  baseline: Baseline
}

export interface PlumberOpts extends PlumberBaseOpts {
  baseline?: Baseline
}

export interface PlumberBoxOpts {
  border?: readonly [string, string]
  gridHeight?: string
  margin?: readonly [number, number]
  padding?: readonly [number, number]
}

/**
 * Via <https://jamonserrano.github.io/plumber-sass/>:
 *   BASELINE = (UnitsPerEm − hhea.Ascender − hhea.Descender) / (2 × UnitsPerEm)
 * See also <https://github.com/source-foundry/font-line>.
 */
enum Baseline {
  AtlasGrotesk = 0.188,
  Capita = 0.138,
  Charlie = 0.12,
  GTPressura = 0.184,
  JetBrainsMono = 0.1725,
  Maison = 0.133,
  MaisonMono = 0.133,
  PragmataPro = 0.128,
  Slate = 0.174,
  SST = 0.0765,
}

const round = _.partial(_.round, _.partial.placeholder, 3)

const getValueAndUnit = _.partial(stripUnit, _.partial.placeholder, true)

const getBaselineCorrection = ({ baseline, fontSize, lineHeight }: { baseline: number; fontSize: number; lineHeight: number }) => {
  const baselineFromBottom = (lineHeight - fontSize) / 2 + fontSize * baseline
  const correctedBaseline = _.round(baselineFromBottom)
  const baselineDifference = correctedBaseline - baselineFromBottom

  return {
    baselineDifference,
    correctedBaseline,
  }
}

const getPlumber = ({
  baseline: B,
  fontSize: FONT_SIZE = 1,
  gridHeight: GRID_HEIGHT = '1rem',
  leadingBottom: LEADING_BOTTOM = 0,
  leadingTop: LEADING_TOP = 0,
  lineHeight: LINE_HEIGHT = 3,
  useBaselineOrigin: USE_BASELINE_ORIGIN = false,
}: GetPlumberOpts) => {
  function plumber({
    baseline = B,
    fontSize = FONT_SIZE,
    gridHeight = GRID_HEIGHT,
    leadingBottom = LEADING_BOTTOM,
    leadingTop = LEADING_TOP,
    lineHeight = LINE_HEIGHT,
    useBaselineOrigin = USE_BASELINE_ORIGIN,
  }: PlumberOpts = {}) {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)
    fontSize = unitless(fontSize)
    lineHeight = unitless(lineHeight)

    const { baselineDifference, correctedBaseline } = getBaselineCorrection({
      baseline, fontSize, lineHeight,
    })

    if (useBaselineOrigin) {
      leadingTop -= lineHeight - correctedBaseline
      leadingBottom -= correctedBaseline
    }

    const shift = baselineDifference < 0 ? 0 : 1

    fontSize = round(fontSize * gridHeightValue)
    lineHeight = round(lineHeight * gridHeightValue)
    const marginTop = round((leadingTop - shift) * gridHeightValue)
    const paddingTop = round((shift - baselineDifference) * gridHeightValue)
    const paddingBottom = round((1 - shift + baselineDifference) * gridHeightValue)
    const marginBottom = round((leadingBottom + shift - 1) * gridHeightValue)

    return css`
      margin-top: ${ marginTop }${ gridHeightUnit };
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      padding-top: ${ paddingTop }${ gridHeightUnit };
      padding-bottom: ${ paddingBottom }${ gridHeightUnit };

      font-size: ${ fontSize }${ gridHeightUnit };
      line-height: ${ lineHeight }${ gridHeightUnit };
    `
  }

  plumber.box = function({
    border = ['0px', '0px'],
    gridHeight = GRID_HEIGHT,
    margin = [0, 0],
    padding = [0, 0],
  }: PlumberBoxOpts) {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)

    const [marginTop, marginBottom] = margin.map(m => round(m * gridHeightValue))
    const [paddingTop, paddingBottom] = padding.map(p => round(p * gridHeightValue))
    const [borderTop, borderBottom] = border

    return css`
      margin-top: ${ marginTop }${ gridHeightUnit };
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      padding-top: calc(${ paddingTop }${ gridHeightUnit } - ${ borderTop });
      padding-bottom: calc(${ paddingBottom }${ gridHeightUnit } - ${ borderBottom });
    `
  }

  return plumber
}

export const primary = getPlumber({ baseline: Baseline.Capita })
export const accent = getPlumber({ baseline: Baseline.Slate })
export const mono = getPlumber({ baseline: Baseline.PragmataPro })
