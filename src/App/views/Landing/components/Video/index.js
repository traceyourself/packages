import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { Y } from 'obj.Layout'
import H from 'atm.Header'

const videoWidth = 640
const videoHeight = 480
const ratio = videoWidth / videoHeight

const paddingFromViewport = 20

const UI = () =>
  <div className={css(styles.wrapper)}>
    <Y y>
      <H {...{
        copy: 'Why choose Trace?',
        level: 2,
        style: {
          color: 'white'
        }
      }} />
      <iframe {...{
        src: 'https://player.vimeo.com/video/57251210',
        // width: '640',
        // height: '480',
        frameBorder: '0',
        // webkitAllowFullScreen: true,
        // mozAllowFullScreen: true,
        allowFullScreen: true,
        style: {
          width: '100%',
          maxWidth: '500px',
          height: `calc(calc(100vw - ${paddingFromViewport * 2}px) / ${ratio})`,
          maxHeight: '400px'
        }
      }} />
    </Y>
  </div>

export default React.createClass({
  updateDimensions () {
    console.log('updated dimensions')
  },

  render () {
    return <UI />
  }
})

const styles = StyleSheet.create({
  wrapper: {
  }
})
