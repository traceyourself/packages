import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { Y } from 'obj.Layout'
import H from 'atm.Header'

const videoWidth = 640
const videoHeight = 360
const ratio = videoWidth / videoHeight

const maxWidth = 900
const maxHeight = maxWidth / ratio

const paddingFromViewport = 20

const UI = () =>
  <div>
    <Y y>
      <H {...{
        copy: 'Why choose Trace?',
        level: 2,
        style: {
          marginBottom: '32px',
          color: 'white',
          textAlign: 'center'
        }
      }} />
      <iframe {...{
        src: 'https://player.vimeo.com/video/194621670',
        // width: '640',
        // height: '360',
        frameBorder: '0',
        // webkitAllowFullScreen: true,
        // mozAllowFullScreen: true,
        allowFullScreen: true,
        style: {
          width: '100%',
          maxWidth: `${maxWidth}px`,
          height: `calc(calc(100vw - ${paddingFromViewport * 2}px) / ${ratio})`,
          maxHeight: `${maxHeight}px`
        }
      }} />
    </Y>
  </div>

export default UI
