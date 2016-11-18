import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { Y } from 'obj.Layout'

const Landing = () =>
  <Y className={css(style.container)}>
    {`Let's get started`}
  </Y>

export default Landing

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%'
  }
})
