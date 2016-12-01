import React from 'react'

import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Package from './shared/Package'
import H from 'atm.Header'

import { colors } from 'App/style/settings'

import { packages } from 'config.definitions'

import { mapToArray } from 'utils'

const UI = React.createClass({
  renderTypeform () {
    (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()
  },

  componentDidMount () {
    this.renderTypeform()
  },

  componentDidUpdate () {
    this.renderTypeform()
  },

  render () {
    const { verticalLayout } = this.props
    const packagesNodes = mapToArray(packages).map((data, i) =>
      <div {...{
        key: i,
        style: {
          margin: '32px'
        }
      }}>
        <Package {...data} />
      </div>
    )
    return (
      <Y y>
        <H {...{
          copy: 'Choose the perfect package',
          level: 2
        }} />
        <div {...{
          style: {
            margin: '32px 0',
            color: colors.heather[2]
          }
        }}>{`Trace packages are the easy way to find the information you want about your family`}</div>
        {verticalLayout
          ? <Y>{packagesNodes}</Y>
          : <X>{packagesNodes}</X>
        }
      </Y>
    )
  }
})

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 800
})

export default connect(mapStateToProps)(UI)
