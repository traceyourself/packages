import React from 'react'
import { connect } from 'react-redux'

import { X } from 'obj.Layout'
import H from 'atm.Header'

import { colors } from 'App/style/settings'

import bulletsSvg from './bullets.svg'

const packagesIncludeData = [
  {
    icon: '',
    text: 'Stories'
  },
  {
    icon: '',
    text: 'Records'
  },
  {
    icon: '',
    text: 'Pictures'
  },
  {
    icon: '',
    text: 'Memories'
  }
]

const bullets = packagesIncludeData.map(({icon, text}, i) =>
  <div key={i}>
    <X>
      <img src={icon} />
      <div>{text}</div>
    </X>
  </div>
)

const UI = ({viewSize}) =>
  <X x>
    <X x>
      <X>
        <div>
          <img {...{
            src: '/assets/images/Main2/bookmark.svg',
            style: {
              width: '30px',
              marginRight: '16px'
            }
          }} />
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
            }}>Trace packages include:</div>
            <img src='/assets/images/Main2/bullets.svg' />
          </div>
        </div>
      </X>
    </X>
    {viewSize !== 'mobile' &&
      <div style={{marginLeft: '32px'}}>
        <img {...{
          src: '/assets/images/Main2/worldoftrace.svg',
          width: viewSize === 'narrow' ? '200px' : '400px'
        }} />
      </div>
    }
  </X>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewSize: viewportSize.width < 700
    ? 'mobile'
    : viewportSize.width < 900
      ? 'narrow'
      : 'full'
})

export default connect(mapStateToProps)(UI)
