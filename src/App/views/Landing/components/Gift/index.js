import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Btn from 'atm.Btn'
import H from 'atm.Header'

import { Links } from 'config.definitions'

const UI = ({viewSize}) => {
  const imageNode =
    <div>
      <img {...{
        src: '/assets/images/Gift/gift.svg',
        style: {
          width: viewSize === 'mobile' ? '100px' : '300px'
        }
      }} />
    </div>

  const textNodes = [
    <H {...{
      copy: 'Give the gift of family',
      level: 2,
      style: viewSize === 'mobile' && {
        textAlign: 'center',
        fontSize: '1.2em'
      }
    }}/>,
    <div {...{
      style: {
        margin: '16px 0 32px 0'
      }
    }}>{`Unite with your loved ones as you share the stories and memories that make them who they are! They can discover more about distant relatives, their origins, the stories, and details about their family history.`}</div>,
    <Links.BuyPackage>
      <Btn {...{
        copy: 'Give Trace as a Gift',
        style: {
          backgroundColor: '#D65C34'
        }
      }}/>
    </Links.BuyPackage>
  ]

  return viewSize === 'mobile'
    ? (
      <Y y>
        <div style={{marginBottom: '16px'}}>
          {imageNode}
        </div>
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
        {imageNode}
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
