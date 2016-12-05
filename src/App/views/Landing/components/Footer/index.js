import React from 'react'
import { connect } from 'react-redux'

import { X } from 'obj.Layout'

import { colors } from 'App/style/settings'

const UI = ({narrowView}) =>
  <X x {...{
    style: {
      // marginLeft: !narrowView && '150px',
      // fontWeight: 'bold',
      fontSize: '0.9em',
      color: colors.slate[2]
    }
  }}>
    <img {...{
      src: '/assets/images/Footer/logomark.svg',
      style: {
        marginRight: '16px',
        width: '25px',
        height: '25px'
      }
    }} />
    <div>&copy; 2016, AncestorCloud Inc.</div>
  </X>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  narrowView: viewportSize.width < 600
})

export default connect(mapStateToProps)(UI)
