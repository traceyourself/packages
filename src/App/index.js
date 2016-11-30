import './style/css'
import React, { PropTypes } from 'react'

import { MatchWithSubRoutes } from 'utils.routing'

import { connect } from 'react-redux'
import { updateViewportSize } from 'App/state/actions'

const App = React.createClass({
  updateDimensions () {
    const { updateViewportSize } = this.props
    updateViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
      name:
        window.innerWidth < 800
        ? 'narrow'
        : 'full'
    })
  },

  componentWillMount () {
    this.updateDimensions()
  },

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions);
  },

  render () {
    const { routes } = this.props
    // console.log(this.props)
    return (
      <div>
        {routes.map((route, i) => <MatchWithSubRoutes {...{ ...route, key: i }} />)}
      </div>
    )
  }
})

const mapStateToProps = _ => _

const boundActions = { updateViewportSize }

export default connect(mapStateToProps, boundActions)(App)
