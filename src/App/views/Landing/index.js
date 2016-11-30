import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import { X, Y } from 'obj.Layout'

import Nav from './components/Nav'
import Main1 from './components/Main1'
import AsSeenIn from './components/AsSeenIn'
import Main2 from './components/Main2'
import Steps from './components/Steps'
import Video from './components/Video'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Gift from './components/Gift'
import Questions from './components/Questions'

const WW = ({children, maxWidth = 1000}) =>
  <div {...{
    style: {
      margin: '0 auto',
      width: '100%',
      maxWidth: `${maxWidth}px`,
      padding: '20px 32px',
      borderBottom: '1px solid #000'
    }
  }}>{children}</div>

export default () =>
  <div>
    <WW>
      <Nav />
    </WW>
    <WW>
      <Main1 />
    </WW>
    <WW>
      <AsSeenIn />
    </WW>
    <WW>
      <Main2 />
    </WW>
    <WW>
      <Steps />
    </WW>
    <div {...{
      style: {
        backgroundColor: colors.slate[2],
        backgroundImage: `url('/Video/videopattern.svg')`,
        backgroundSize: 'cover'
      }
    }}>
      <WW>
        <Video />
      </WW>
    </div>
    <WW>
      <Packages />
    </WW>
    <WW>
      <Testimonials />
    </WW>
    <WW>
      <Gift />
    </WW>
    <WW>
      <Questions />
    </WW>
  </div>

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%'
  }
})
