import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important' // so we can override with inline styles
import { colors } from 'App/style/settings'

const levels = {
  1: {
    tag: 'h1',
    style: {
      fontSize: '3.0em'
    }
  },
  2: {
    tag: 'h2',
    style: {
      fontSize: '2.0em'
    }
  }
}

export default ({copy, children, level = 1, style: styleProp}) => {
  const {tag: $tag, style} = levels[level]

  return (
    <$tag {...{
      className: css(styles.wrapper),
      style: {
        ...style,
        ...styleProp
      }
    }}>
      {copy || children}
    </$tag>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    padding: 0,
    lineHeight: '1.0em',
    color: colors.slate[0]
  }
})
