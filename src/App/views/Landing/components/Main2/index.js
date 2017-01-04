import React from 'react'
import { connect } from 'react-redux'

import { X } from 'obj.Layout'
import H from 'atm.Header'

import { colors } from 'App/style/settings'

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

const Wrapper = ({children, placeGradientOverBackgroundImage}) =>
  <X x y {...{
    style: {
      position: 'relative',
      height: '800px'
    }
  }}>
    <div {...{
      style: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '#000',
        backgroundImage: `url('/assets/images/Main2/tracepackagereal.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        zIndex: '-1',
        opacity: placeGradientOverBackgroundImage ? '0.8' : '0.2'
      }
    }}>
      {placeGradientOverBackgroundImage &&
        <div {...{
          style: {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(255, 255, 255, 1.0))`
          }
        }} />
      }
    </div>
    {children}
  </X>

const UI = ({viewSize}) => {
  const content =
    <X>
      {viewSize !== 'mobile' &&
        <div>
          <img {...{
            src: '/assets/images/Main2/lightbluebookmark.svg',
            style: {
              width: '30px',
              marginRight: '16px'
            }
          }} />
        </div>
      }
      <div>
        <H {...{
          copy: 'Everyone has a story. Find yours.',
          level: 2,
          style: {
            // fontSize: '1.7em',
            // textShadow: '0 0 3px rgba(255, 255, 255, 0.6)'
          }
        }} />
        <div style={{
          marginTop: '12px',
          fontWeight: '500'
        }}>{`Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`}</div>
        <div style={{paddingTop: '16px'}}>
          {packageItems.map(({icon, name}, i) =>
            <div key={i}>
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
                    color: '#F4865D',
                    // textShadow: '1px 1px 0 #4C708F'
                  }
                }}>{name}</div>
              </X>
            </div>
          )}
        </div>
      </div>
    </X>

  return viewSize === 'mobile'
    ? (
      <Wrapper>
        <div {...{
          style: {
            padding: '32px'
          }
        }}>
          {content}
        </div>
      </Wrapper>
    )
    : (
      <Wrapper placeGradientOverBackgroundImage>
        <X x y {...{
          style: {
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '100px',
            maxWidth: '400px'
          }
        }}>
          {content}
        </X>
      </Wrapper>
    )
}

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewSize: viewportSize.width < 700
    ? 'mobile'
    : viewportSize.width < 900
      ? 'narrow'
      : 'full'
})

export default connect(mapStateToProps)(UI)
