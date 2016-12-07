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

const axel = Math.random() + ''
const a = axel * 10000000000000

const trackingPixelThatIsSupposedToBeAddedDynamically =
  <img {...{
    src: `https://pubads.g.doubleclick.net/activity;xsp=25565;ord=${a}?`,
    width: 1,
    height: 1,
    border: 0
  }} />

const Success = React.createClass({
  getInitialState () {
    return {
      closed: false
    }
  },

  render () {
    return !this.state.closed && (
      <div className={css(styles.wrapper)}>
        <img {...{
          className: css(styles.closeButton),
          src: '/assets/images/Success/x.svg',
          onClick: () => this.setState({closed: true})
        }} />
        {trackingPixel}
        {trackingPixelThatIsSupposedToBeAddedDynamically}
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

const closeButtonSize = 32
const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    padding: '200px 0',
    backgroundColor: '#43C6CF',
    textAlign: 'center'
  },

  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: `${closeButtonSize}px`,
    height: `${closeButtonSize}px`,
    cursor: 'pointer'
  }
})

export default Success
