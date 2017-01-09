import React from 'react'
import { connect } from 'react-redux'

import { css } from 'aphrodite/no-important'
import styles from './styles'

import { X } from 'obj.Layout'
import H from 'atm.Header'

const imagesDirectory = '/assets/images/Main2/'

const packageItems = [
  {
    icon: `${imagesDirectory}orangebook.svg`,
    name: 'Stories'
  },
  {
    icon: `${imagesDirectory}orangecamera.svg`,
    name: 'Pictures'
  },
  {
    icon: `${imagesDirectory}orangefolders.svg`,
    name: 'Records'
  }
]

const BackgroundImage = ({children, fade}) =>
  <div {...{
    className: css(styles.backgroundImage),
    style: {
      opacity: fade ? '0.2' : '1.0'
    }
  }}>{children}</div>

const Gradient = () =>
  <div {...{
    className: css(styles.gradient)
  }} />

const Wrapper = ({children, mobile}) =>
  <div {...{
    className: css(styles[mobile ? 'wrapper-mobile' : 'wrapper'])
  }}>
    <BackgroundImage {...{
      fade: mobile
    }} />
    {!mobile &&
      <Gradient />
    }
    {children}
  </div>

const PackageItem = ({icon, name}) =>
  <X x style={{marginTop: '16px'}}>
    <img {...{
      src: icon,
      style: {
        width: '50px',
        height: '50px'
      }
    }} />
    <div {...{
      style: {
        paddingLeft: '16px',
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#F4865D'
      }
    }}>{name}</div>
  </X>

const ContentText = () =>
  <div>
    <H {...{
      copy: 'Everyone has a story. Find yours.',
      level: 2
    }} />
    <div style={{marginTop: '12px', fontWeight: '500'}}>
      {`Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`}
    </div>
    <div style={{paddingTop: '16px'}}>
      {packageItems.map(({icon, name}, i) =>
        <div key={i}>
          <PackageItem {...{ icon, name }} />
        </div>
      )}
    </div>
  </div>

const Bookmark = () =>
  <img {...{
    src: '/assets/images/Main2/lightbluebookmark.svg',
    style: {
      width: '30px'
    }
  }} />

const FullContent = () =>
  <X>
    <div style={{marginRight: '16px'}}>
      <Bookmark />
    </div>
    <ContentText />
  </X>

const UI = ({viewSize}) =>
  viewSize === 'mobile'
    ? (
      <Wrapper mobile>
        <div style={{padding: '32px'}}>
          <ContentText />
        </div>
      </Wrapper>
    )
    : (
      <Wrapper>
        <div style={{maxWidth: '400px'}}>
          <FullContent />
        </div>
      </Wrapper>
    )

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewSize: viewportSize.width < 1000
    ? 'mobile'
    : 'full'
})

export default connect(mapStateToProps)(UI)
