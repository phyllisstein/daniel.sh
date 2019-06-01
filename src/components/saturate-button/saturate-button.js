import _ from 'lodash'
import { Button } from './styled'
import React from 'react'
import { withTheme } from 'emotion-theming'

function SaturateButton({ children, color = 'lemonTart', theme, ...props }) {
  if (!theme.palette.chroma[color]) return null

  const saturation = _.random(5)
  const saturated = theme.palette.chroma[color].saturate(saturation)

  return (
    <Button bg={ saturated } { ...props }>
      { children }
    </Button>
  )
}

export default withTheme(SaturateButton)