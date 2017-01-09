import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import Nav from './components/Nav'
import Success from './components/Success'
import Main1 from './components/Main1'
import AsSeenIn from './components/AsSeenIn'
import Main2 from './components/Main2'
import HowItWorks from './components/Steps'
import Video from './components/Video'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Gift from './components/Gift'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const WW = ({children, maxWidth = 1100}) =>
  <div {...{
    style: {
      margin: '0 auto',
      width: '100%',
      maxWidth: `${maxWidth}px`,
      padding: '0 32px'
    }
  }}>{children}</div>

const NavWithWrapper = ({scrolledToTop}) =>
  <div {...{
    className: !scrolledToTop
      ? css(navStyles.nav, navStyles.shadow)
      : css(navStyles.nav)
  }}>
    <WW>
      <Nav />
    </WW>
  </div>

const navStyles = StyleSheet.create({
  nav: {
    zIndex: '2',
    position: 'fixed', top: '0', right: '0', bottom: '0', width: '100%', // eslint-disable-line
    background: 'white',
    height: '80px'
  },
  shadow: {
    boxShadow: '0 0 12px 5px rgba(0, 0, 0, 0.05)',
    transition: 'box-shadow 0.5s ease-in-out'
  }
})

const navMapStateToProps = ({ viewState: { scroll: { atTop } } }) => ({
  scrolledToTop: atTop
})
const NavWithWrapperAndState = connect(navMapStateToProps)(NavWithWrapper)

const UI = ({success}) =>
  <div>
    <NavWithWrapperAndState />
    <div {...{
      style: {
        height: '80px'
      }
    }} />
    {success && <Success />}
    <div {...{
      style: {
        padding: '128px 0'
      }
    }}>
      <WW>
        <Main1 />
      </WW>
    </div>
    <div style={{padding: '50px 16px'}}>
      <AsSeenIn />
    </div>
    <Main2 />
    <div {...{
      id: 'HowItWorks',
      style: {
        backgroundImage: `url('/assets/images/HowItWorks/howitworksbackground.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-200px center',
        backgroundSize: '700px',
        padding: '80px 0'
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
        padding: '80px 0'
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
        position: 'relative',
        padding: '64px 0'
      }
    }}>
      <div {...{
        style: {
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          width: '700px',
          background: '#000',
          backgroundImage: `url('/assets/images/Main2/tracepackagereal.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '1000px',
          zIndex: '-1',
          opacity: '0.5'
        }
      }}>
        <div {...{
          style: {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: `linear-gradient(to left, rgba(0, 0, 0, 0.0), rgba(255, 255, 255, 1.0))`
          }
        }} />
      </div>
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
        padding: '90px 0'
      }
    }}>
      <WW>
        <FAQ />
      </WW>
    </div>
    <div {...{
      style: {
        padding: '32px 0'
      }
    }}>
      <WW>
        <Footer />
      </WW>
    </div>
  </div>

export default React.createClass({
  loadTypeformScript () {
    (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})() // eslint-disable-line
  },

  componentDidMount () {
    this.loadTypeformScript()
  },

  render () {
    return <UI {...this.props} />
  }
})
