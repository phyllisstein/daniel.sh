/* eslint-disable react/no-multi-comp */

import _ from 'lodash'
import R from 'ramda'
import React from 'react'
import styledBase from 'styled-components'

const styled = (tag, options = {}) => {
  const { omitPropsByName } = options
  let targetWrapper = tag

  if (_.isFunction(omitPropsByName)) {
    targetWrapper = React.forwardRef(({ as, forwardedAs, ...props }, ref) => {
      const safeProps = _.filter(props, (_propValue, propName) => !omitPropsByName(propName))
      const element = as ?? forwardedAs ?? tag

      return React.createElement(element, { ...safeProps, ref })
    })
  } else if (Array.isArray(omitPropsByName)) {
    targetWrapper = React.forwardRef(({ as, forwardedAs, ...props }, ref) => {
      console.group()
      console.log(`tag => `, tag)
      console.log(`omitPropsByName => `, omitPropsByName)
      console.log(`props => `, props)
      console.groupEnd()

      const element = as ?? forwardedAs ?? tag

      const safeProps = R.omit(omitPropsByName, props)
      return React.createElement(element, { ...safeProps, ref })
    })
  }

  // return styledBase(targetWrapper).apply(args)
  return styledBase(targetWrapper)
}

// Object.keys(styledBase).forEach(domElement => styled[domElement] = (...args) => styled.apply([domElement, ...args]))
// Object.keys(styledBase).forEach(domElement => styled[domElement] = (...args) => styled(domElement).apply(args))
Object.keys(styledBase).forEach(domElement => styled[domElement] = styled(domElement))

export default styled
