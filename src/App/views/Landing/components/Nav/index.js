import React from 'react'
import { connect } from 'react-redux'

import { colors } from 'App/style/settings'

import { contactPhone } from 'config.definitions'

import { X } from 'obj.Layout'

const links = [
  { copy: 'How It Works', link: '#HowItWorks' },
  { copy: 'Pricing', link: '#Pricing' },
  { copy: 'FAQ', link: '#FAQ' },
  {
    copy:
      <X x>
        <img {...{
          src: '/assets/images/Nav/phone2.svg',
          style: {
            margin: '0 4px 0 0',
            width: '13px',
            height: '13px'
          }
        }}/>
        {contactPhone}
      </X>,
    link: `tel:${contactPhone}`
  }
]

const breakpoints = {
  mobile: 400,
  narrow: 600
}

const Nav = ({viewWidth}) =>
  <X x spaced style={{
    width: '100%',
    height: '100%'
  }}>
    <a href='/'>
      <img {...{
        src: '/assets/images/Nav/wordmark-blue.svg',
        style: {
          height: viewWidth < breakpoints.mobile
            ? '13px'
            : viewWidth < breakpoints.narrow
              ? '16px'
              : '24px'
        }
      }} />
    </a>
    <X>
      {links.map(({copy, link}, i) =>
        <a {...{
          key: i,
          href: link,
          style: {
            marginLeft: viewWidth < breakpoints.narrow
              ? '8px'
              : '32px',
            fontSize: viewWidth < breakpoints.narrow ? '11px' :'14px',
            fontWeight: 'bold',
            color: colors.slate[2],
            textDecoration: 'none',
            textAlign: 'center'
          }
        }}>{copy}</a>
      )}
    </X>
  </X>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewWidth: viewportSize.width
})

export default connect(mapStateToProps)(Nav)
