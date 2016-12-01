import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import { contactPhone } from 'config.definitions'

import { X } from 'obj.Layout'
import { Link } from 'react-scroll'

const links = [
  { copy: 'How It Works', to: 'HowItWorks' },
  { copy: 'Pricing', to: 'Pricing', offset: -80 },
  { copy: 'FAQ', to: 'FAQ' }
]

const breakpoints = {
  mobile: 400,
  narrow: 600
}

const Nav = ({viewWidth}) => {
  const linkStyles = {
    marginLeft: viewWidth < breakpoints.narrow
      ? '8px'
      : '32px',
    fontSize: viewWidth < breakpoints.narrow ? '11px' :'14px',
    fontWeight: 'bold',
    color: colors.slate[2],
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer'
  }

  return (
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
        {links.map(({copy, to, offset}, i) =>
          <Link {...{
            key: i,
            to,
            style: linkStyles,
            activeClass: css(styles['link-active']),
            spy: true,
            smooth: true,
            offset: offset || -80,
            duration: 500,
            onSetActive: () => {}
          }}>{copy}</Link>
        )}
        <a {...{
          href: `tel:${contactPhone}`,
          style: linkStyles
        }}>
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
          </X>
        </a>
      </X>
    </X>
  )
}

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  viewWidth: viewportSize.width
})

export default connect(mapStateToProps)(Nav)

const styles = StyleSheet.create({
  'link-active': {
    color: colors.blue[0]
  }
})
