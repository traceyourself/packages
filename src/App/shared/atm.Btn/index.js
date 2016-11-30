import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'App/style/settings'

export default ({copy, children, disabled, style}) =>
  <button {...{
    className: css(styles[
      disabled
      ? 'button-disabled'
      : 'button'
    ]),
    style
  }}>{copy || children}</button>

const height = 50

const buttonStyles = {
  height: `${height}px`,
  padding: '0 24px',
  borderRadius: `${height / 2}px`,
  border: 'none',
  backgroundColor: colors.blue[0],
  fontWeight: 'bold',
  color: 'white',
  outline: 'none'
}
const styles = StyleSheet.create({
  button: buttonStyles,

  'button-disabled': {
    ...buttonStyles,
    backgroundColor: '#BABABA'
  }
})
