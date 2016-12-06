import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import H from 'atm.Header'

import { colors } from 'App/style/settings'

const UI = ({viewSize}) => {
  const content =
    <X x>
      <X>
        <div>
          {viewSize !== 'mobile' &&
            <img {...{
              src: '/assets/images/Main2/bookmark.svg',
              style: {
                width: '30px',
                marginRight: '16px'
              }
            }} />
          }
        </div>
        <div>
          <H {...{
            copy: 'Everyone has a story. Find yours.',
            level: 2
          }} />
          <div style={{
            marginTop: '16px'
          }}>{`Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`}</div>
          <div style={{ marginTop: '32px' }}>
            <div {...{
              style: {
                marginBottom: '8px',
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: colors.slate[1]
              }
            }}>Research packages include:</div>
            <img src='/assets/images/Main2/bullets.svg' />
          </div>
        </div>
      </X>
    </X>

  const image =
    <img {...{
      src: '/assets/images/Main2/worldoftrace.png',
      style: {
        flexShrink: 0,
        marginLeft: '32px',
        marginBottom: viewSize === 'mobile' ? '50px' : '0',
        width: viewSize === 'mobile'
          ? '50%'
          : viewSize === 'narrow'
            ? '200px'
            : '390px'
      }
    }} />

  return viewSize === 'mobile'
    ? (
      <Y y>
        {image}
        {content}
      </Y>
    )
    : (
      <X x>
        {content}
        {image}
      </X>
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
