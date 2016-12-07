import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import H from 'atm.Header'

const trackingPixel =
  <img {...{
    src: 'https://pubads.g.doubleclick.net/activity;xsp=25565;ord=1?',
    width: 1,
    height: 1,
    border: 0
  }} />

const Success = React.createClass({
  componentDidMount () {
    var axel = Math.random() + ''
    var a = axel * 10000000000000
    document.write('<img src="https://pubads.g.doubleclick.net/activity;xsp=25565;ord=' + a + '?" width=1 height=1 border=0/>')
  },

  render () {
    return (
      <div className={css(styles.wrapper)}>
        {trackingPixel}
        <H {...{
          level: 2,
          copy: 'Success!',
          style: {
            color: 'white'
          }
        }} />
        <div {...{
          style: {
            marginTop: '8px',
            fontSize: '1.4em',
            color: 'white'
          }
        }}>{`This is a placeholder.`}</div>
      </div>
    )
  }
})

const styles = StyleSheet.create({
  wrapper: {
    padding: '200px 0',
    backgroundColor: '#43C6CF',
    textAlign: 'center'
  }
})

export default Success
