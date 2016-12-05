import './style/css'
import React from 'react'

import { MatchWithSubRoutes } from 'utils.routing'

import { connect } from 'react-redux'
import { updateViewportSize, updateScroll } from 'App/state/actions'

const App = React.createClass({
  getInitialState () {
    return {
      timers: {}
    }
  },

  runThisFunctionOnlyAfterItHasntBeenRunForACertainAmountOfTime (name, fn, time) {
    window.clearTimeout(this.state.timers[name])
    this.setState({
      ...this.state,
      timers: {
        ...this.state.timers,
        [name]: window.setTimeout(fn, time)
      }
    })
  },

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

  startUpdateScrollTimer () {
    this.runThisFunctionOnlyAfterItHasntBeenRunForACertainAmountOfTime(
      'updateScroll',
      this.updateScroll,
      50
    )
  },

  updateScroll () {
    const { updateScroll } = this.props
    const scrollTop = window.document.body.scrollTop
    updateScroll({
      atTop: scrollTop === 0
    })
  },

  componentWillMount () {
    this.updateDimensions()
    this.updateScroll()
  },

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
    window.addEventListener('scroll', this.startUpdateScrollTimer)
  },

  render () {
    const { routes } = this.props
    return (
      <div>
        {routes.map((route, i) => <MatchWithSubRoutes {...{ ...route, key: i }} />)}
      </div>
    )
  }
})

const mapStateToProps = _ => _

const boundActions = { updateViewportSize, updateScroll }

export default connect(mapStateToProps, boundActions)(App)
