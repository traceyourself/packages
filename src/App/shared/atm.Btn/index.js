import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

export default ({copy, children}) =>
  <button {...{
    className: css(styles.button)
  }}>{copy || children}</button>

const styles = StyleSheet.create({
  button: {
    background: '#eee'
  }
})
