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
import FAQ from './components/FAQ'
import Links from './components/Links'
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
        zIndex: '2',
        position: 'fixed', top: '0', right: '0', bottom: '0', width: '100%',
        background: 'white',
        height: '80px'
      }
    }}>
      <WW>
        <Nav />
      </WW>
    </div>
    <div {...{
      style: {
        height: '80px'
      }
    }} />
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
      id: 'HowItWorks',
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
        backgroundColor: colors.slate[2],
        backgroundImage: `url('/assets/images/Video/videopattern.svg')`,
        backgroundSize: '300px',
        padding: '64px 0'
      }
    }}>
      <WW>
        <Video />
      </WW>
    </div>
    <div {...{
      id: 'Pricing',
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
      id: 'FAQ',
      style: {
        position: 'relative',
        backgroundColor: colors.slate[2],
        backgroundImage: `url('/assets/images/FAQ/rainbackground.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-200px top',
        backgroundSize: '800px',
        padding: '64px 0'
      }
    }}>
      <WW>
        <FAQ />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '32px 0',
      }
    }}>
      <WW>
        <Footer />
      </WW>
    </div>
  </div>

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%'
  }
})
