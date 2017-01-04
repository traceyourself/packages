import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Btn from 'atm.Btn'
import H from 'atm.Header'

import { Links } from 'config.definitions'

const UI = ({viewSize}) => {
  const textNodes = [
    <H {...{
      copy: 'Give the gift of family',
      level: 2,
      style: viewSize === 'mobile' && {
        textAlign: 'center',
        fontSize: '1.2em'
      }
    }} />,
    <div {...{
      style: {
        margin: '16px 0 32px 0',
        fontWeight: '500'
      }
    }}>{`Unite with your loved ones as you share the stories and memories that make them who they are! They can discover more about distant relatives, their origins, the stories, and details about their family history.`}</div>,
    <Links.BuyPackage>
      <Btn {...{
        copy: 'Give Trace as a Gift',
        style: {
          backgroundColor: '#D65C34'
        }
      }} />
    </Links.BuyPackage>
  ]

  return viewSize === 'mobile'
    ? (
      <Y y style={{textShadow: '0 1px 1px rgba(255, 255, 255, 0.9)'}}>
        <Y y>
          {textNodes.map((n, i) => <div key={i}>{n}</div>)}
        </Y>
      </Y>
    )
    : (
      <X x justify='space-between'>
        <div style={{maxWidth: '500px'}}>
          {textNodes.map((n, i) => <div key={i}>{n}</div>)}
        </div>
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
