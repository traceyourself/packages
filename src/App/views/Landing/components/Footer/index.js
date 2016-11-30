import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'

import { colors } from 'App/style/settings'

import linkLists from './linkLists'

const logoSize = 50
const logo =
  <img {...{
    src: '/assets/images/logo.svg',
    style: {
      width: logoSize,
      height: logoSize
    }
  }} />

const linkListNodes = linkLists.map(({name, links}, i) =>
  <div {...{
    key: i,
    style: {
      margin: '0 40px 40px 0'
    }
  }}>
    <div {...{
      style: {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '1.2em',
        color: colors.slate[2]
      }
    }}>{name}</div>
    <Y>
      {links.map(({copy, href}, i) =>
        <a {...{
          key: i,
          href,
          style: {
            marginTop: '10px',
            textDecoration: 'none',
            color: colors.blue[0],
            fontSize: '0.9em'
          }
        }}>{copy}</a>
      )}
    </Y>
  </div>
)

const UI = ({verticalLayout}) =>
  <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
    <X>
      <div style={{
        marginRight: '100px'
      }}>{logo}</div>
      <X justify='space-between'
        wrap
        style={{
          width: '100%'
        }}
      >
        {linkListNodes}
      </X>
    </X>
  </div>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 400
})

export default connect(mapStateToProps)(UI)
