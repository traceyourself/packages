import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'App/style/settings'

export default ({copy, children}) =>
  <button {...{
    className: css(styles.button)
  }}>{copy || children}</button>

const height = 50

const styles = StyleSheet.create({
  button: {
    height: `${height}px`,
    padding: '0 24px',
    borderRadius: `${height / 2}px`,
    border: 'none',
    background: colors.blue[0],
    fontWeight: 'bold',
    color: 'white'
  }
})
