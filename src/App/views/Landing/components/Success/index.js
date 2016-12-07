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
    return (
      <div {...{
        className: this.state.closed
          ? css(styles.wrapper, styles['wrapper-closed'])
          : css(styles.wrapper)
      }}>
        <img {...{
          className: css(styles.closeButton),
          src: '/assets/images/Success/x.svg',
          onClick: () => this.setState({closed: true})
        }} />
        {trackingPixel}
        {trackingPixelThatIsSupposedToBeAddedDynamically}
        <H {...{
          level: 2,
          copy: 'Thank You!',
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
        }}>{`Our team will contact you soon with next steps.`}</div>
      </div>
    )
  }
})

const closeButtonSize = 32
const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: '400px',
    padding: '0 16px',
    backgroundColor: '#43C6CF',
    textAlign: 'center',
    opacity: '1.0',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  'wrapper-closed': {
    height: '0px',
    opacity: '0.0',

    transition: 'height 1s, opacity 1s'
  },

  closeButton: {
    position: 'absolute',
    top: '32px',
    right: '32px',
    width: `${closeButtonSize}px`,
    height: `${closeButtonSize}px`,
    cursor: 'pointer'
  }
})

export default Success
