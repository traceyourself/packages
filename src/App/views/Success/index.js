import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import H from 'atm.Header'

const Success = React.createClass({
  componentDidMount () {
    var axel = Math.random() + ''
    var a = axel * 10000000000000
    document.write('<img src="https://pubads.g.doubleclick.net/activity;xsp=25565;ord=' + a + '?" width=1 height=1 border=0/>')
  },

  render () {
    <div className={css(styles.wrapper)}>
      <H {...{
        copy: 'Success'
      }} />
      <img {...{
        src: 'https://pubads.g.doubleclick.net/activity;xsp=25565;ord=1?',
        width: 1,
        height: 1,
        border: 0
      }} />
    </div>
  }
})

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Success
