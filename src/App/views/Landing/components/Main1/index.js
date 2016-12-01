import React from 'react'
import { connect } from 'react-redux'

import { X } from 'obj.Layout'
import H from 'atm.Header'
import Btn from 'atm.Btn'

import { links } from 'config.definitions'

const UI = ({viewSize}) =>
  <X x>
    {viewSize !== 'mobile' &&
      <div style={{marginRight: '32px'}}>
        <img {...{
          src: '/assets/images/Main1/hero1.svg',
          width: viewSize === 'narrow' ? '200px' : '500px'
        }} />
      </div>
    }
    <div>
      <H {...{
        level: 2,
        copy: 'Yourself, discovered',
        style: {
          marginBottom: '16px'
        }
      }} />
      <div {...{
        style: {
          marginBottom: '32px'
        }
      }}>{`You belong to a family narrative that is bigger than yourself, it's time to find out what that is.`}</div>
      <div>
        <a href={links.buyPackage}>
          <Btn copy='Start discovering' />
        </a>
      </div>
    </div>
  </X>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewSize: viewportSize.width < 700
    ? 'mobile'
    : viewportSize.width < 900
      ? 'narrow'
      : 'full'
})

export default connect(mapStateToProps)(UI)
