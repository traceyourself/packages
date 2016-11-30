import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import { X, Y } from 'obj.Layout'

import Nav from './components/Nav'
import Main1 from './components/Main1'
import AsSeenIn from './components/AsSeenIn'
import Main2 from './components/Main2'
import HowItWorks from './components/Steps'
import Video from './components/Video'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Gift from './components/Gift'
import Questions from './components/Questions'
import Footer from './components/Footer'

const WW = ({children, maxWidth = 1000}) =>
  <div {...{
    style: {
      margin: '0 auto',
      width: '100%',
      maxWidth: `${maxWidth}px`,
      padding: '0 32px'
    }
  }}>{children}</div>

export default () =>
  <div>
    <div {...{
      style: {
        padding: '24px'
      }
    }}>
      <WW>
        <Nav />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '64px 0'
      }
    }}>
      <WW>
        <Main1 />
      </WW>
    </div>
    <WW>
      <AsSeenIn />
    </WW>
    <div {...{
      style: {
        backgroundColor: '#FDFDFD',
        padding: '64px 0'
      }
    }}>
      <WW>
        <Main2 />
      </WW>
    </div>
    <div {...{
      style: {
        backgroundImage: `url('/assets/images/HowItWorks/howitworksbackground.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-200px center',
        backgroundSize: '700px',
        padding: '64px 0'
      }
    }}>
      <WW>
        <HowItWorks />
      </WW>
    </div>
    <div {...{
      style: {
        position: 'relative',
        backgroundColor: colors.slate[2],
        backgroundImage: `url('/assets/images/Video/videopattern.svg')`,
        backgroundSize: 'cover',
        padding: '64px 0'
      }
    }}>
      <WW>
        <Video />
      </WW>
    </div>
    <div {...{
      style: {
        width: '100%',
        backgroundImage: `url('/assets/images/Packages/packagetree.svg'), url('/assets/images/Packages/packagebook.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150px',
        backgroundPosition: '0px 100px, 100% 100%',
        padding: '64px 0'
      }
    }}>
      <WW>
        <Packages />
      </WW>
    </div>
    <div {...{
      style: {
        position: 'relative',
        backgroundColor: '#F9F9FA',
        padding: '64px 0'
      }
    }}>
      <WW>
        <Testimonials />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '64px 0'
      }
    }}>
      <WW>
        <Gift />
      </WW>
    </div>
    <div {...{
      style: {
        position: 'relative',
        backgroundColor: colors.slate[2],
        padding: '64px 0'
      }
    }}>
      <WW>
        <Questions />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '128px 0'
      }
    }}>
      <WW>
        <Footer />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '32px 0',
        fontWeight: 'bold',
        fontSize: '0.9em',
        color: colors.slate[2]
      }
    }}>
      <WW>
        <div style={{marginLeft: '150px'}}>Copyright, Trace Inc.</div>
      </WW>
    </div>
  </div>

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%'
  }
})
