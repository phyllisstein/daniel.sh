import _ from 'lodash'
import R from 'ramda'
import { scale } from './typography'

/**
 * BASELINE = (UnitsPerEm − hhea.Ascender − hhea.Descender) / (2 × UnitsPerEm)
 * (Q.v. <https://jamonserrano.github.io/plumber-sass/>.)
 */
const APTIFER_BASELINE = 0.1425
const CAPITA_BASELINE = 0.138
const INTER_BASELINE = 0.135
const SST_BASELINE = 0.0765

const round3 = x => _.round(x, 3)
const withUnit = R.curry((unit, val) => val === 0 ? val : `${ val }${ unit }`)

function getBaselineCorrection({ baseline, fontSize, lineHeight }) {
  const baselineFromBottom = ((lineHeight - fontSize) / 2) + (fontSize * baseline)
  const correctedBaseline = _.round(baselineFromBottom)
  const baselineDifference = correctedBaseline - baselineFromBottom

  return {
    baselineDifference,
    correctedBaseline,
  }
}

function makePlumber({
  baseline: BASELINE,
  fontSize: FONT_SIZE = 2,
  gridHeight: GRID_HEIGHT = 1,
  gridUnit: GRID_UNIT = 'rem',
  leadingBottom: LEADING_BOTTOM = 0,
  leadingTop: LEADING_TOP = 0,
  lineHeight: LINE_HEIGHT = 3,
  useBaselineOrigin: USE_BASELINE_ORIGIN = false,
}) {
  const plumber = function({
    baseline = BASELINE,
    fontSize = FONT_SIZE,
    gridHeight = GRID_HEIGHT,
    gridUnit = GRID_UNIT,
    leadingBottom = LEADING_BOTTOM,
    leadingTop = LEADING_TOP,
    lineHeight = LINE_HEIGHT,
    useBaselineOrigin = USE_BASELINE_ORIGIN,
  } = {}) {
    const withGridUnit = withUnit(gridUnit)

    const { baselineDifference, correctedBaseline } = getBaselineCorrection({ baseline, fontSize, lineHeight })

    if (useBaselineOrigin) {
      leadingTop -= lineHeight - correctedBaseline
      leadingBottom -= correctedBaseline
    }

    const shift = baselineDifference < 0 ? 0 : 1

    fontSize = round3(fontSize * gridHeight)
    lineHeight = round3(lineHeight * gridHeight)

    const marginTop = round3((leadingTop - shift) * gridHeight)
    const paddingTop = round3((shift - baselineDifference) * gridHeight)
    const paddingBottom = round3((1 - shift + baselineDifference) * gridHeight)
    const marginBottom = round3((leadingBottom + shift - 1) * gridHeight)

    return `
      font-size: ${ withGridUnit(fontSize) };
      line-height: ${ withGridUnit(lineHeight) };
      margin-bottom: ${ withGridUnit(marginBottom) };
      margin-top: ${ withGridUnit(marginTop) };
      padding-bottom: ${ withGridUnit(paddingBottom) };
      padding-top: ${ withGridUnit(paddingTop) };
    `
  }

  plumber.box = function({
    border = 0,
    borderUnit = GRID_UNIT,
    gridHeight = GRID_HEIGHT,
    gridUnit = GRID_UNIT,
    margin = 0,
    padding = 0,
  }) {
    const [marginTop, marginBottom] = Array.isArray(margin)
      ? margin.map(m => round3(m * gridHeight))
      : [margin, margin].map(m => round3(m * gridHeight))
    const [paddingTop, paddingBottom] = Array.isArray(padding)
      ? padding.map(p => round3(p * gridHeight))
      : [padding, padding].map(p => round3(p * gridHeight))
    const [borderTop, borderBottom] = Array.isArray(border)
      ? border
      : [border, border]

    return `
      margin-bottom: ${ withUnit(gridUnit, marginBottom) };
      margin-top: ${ withUnit(gridUnit, marginTop) };
      padding-bottom: calc(${ paddingBottom }${ gridUnit } - ${ borderBottom }${ borderUnit });
      padding-top: calc(${ paddingTop }${ gridUnit } - ${ borderTop }${ borderUnit });
    `
  }

  return plumber
}

const plumber = makePlumber({ baseline: SST_BASELINE, fontSize: scale(1), gridHeight: 10, gridUnit: 'px' })
plumber.accent = makePlumber({ baseline: APTIFER_BASELINE, fontSize: scale(1), gridHeight: 10, gridUnit: 'px' })

export default plumber
