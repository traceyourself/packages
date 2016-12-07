import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import H from 'atm.Header'
import Btn from 'atm.Btn'

import { Links } from 'config.definitions'

const UI = ({viewSize}) => {
  const image =
    <img {...{
      src: '/assets/images/Main1/hero1.png',
      width: viewSize === 'mobile'
        ? '70%'
        : viewSize === 'narrow'
          ? '200px'
          : '490px',
      style: {
        flexShrink: 0,
        marginRight: '32px',
        marginBottom: viewSize === 'mobile' && '16px'
      }
    }} />

  const content =
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
        <Links.BuyPackage>
          <Btn copy='Start discovering' />
        </Links.BuyPackage>
      </div>
    </div>

  return viewSize === 'mobile'
    ? (
      <Y y>
        {image}
        {content}
      </Y>
    )
    : (
      <X x>
        {image}
        {content}
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
