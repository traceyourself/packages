import React from 'react'
import { connect } from 'react-redux'

import { colors } from 'App/style/settings'

const UI = ({narrowView}) =>
  <div style={{
    // marginLeft: !narrowView && '150px',
    fontWeight: 'bold',
    fontSize: '0.9em',
    color: colors.slate[2]
  }}>Copyright, AncestorCloud Inc.</div>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  narrowView: viewportSize.width < 600
})

export default connect(mapStateToProps)(UI)
