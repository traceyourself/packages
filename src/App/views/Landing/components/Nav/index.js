import React from 'react'
import { connect } from 'react-redux'

import { colors } from 'App/style/settings'

import { contactPhone } from 'config.definitions'

import { X } from 'obj.Layout'

const links = [
  { copy: 'How It Works', link: '/#HowItWorks' },
  { copy: 'Pricing', link: '/#Pricing' },
  { copy: 'FAQ', link: '/#FAQ' },
  { copy: contactPhone, link: `tel:${contactPhone}` }
]

const Nav = ({narrowView = false}) =>
  <X x spaced style={{
    width: '100%'
  }}>
    <a href='/'>
      <img {...{
        src: '/assets/images/Nav/wordmark-blue.svg',
        style: {
          height: narrowView ? '16px' : '24px'
        }
      }} />
    </a>
    <X>
      {links.map(({copy, link}, i) =>
        <a {...{
          key: i,
          href: link,
          style: {
            margin: narrowView
              ? '0 4px'
              : '0 16px',
            fontSize: '14px',
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
  narrowView: viewportSize.width < 500
})

export default connect(mapStateToProps)(Nav)
