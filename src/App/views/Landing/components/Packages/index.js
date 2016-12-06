import React from 'react'

import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Package from './shared/Package'
import H from 'atm.Header'

import { colors } from 'App/style/settings'

import { packages } from 'config.definitions'

import { mapToArray } from 'utils'

const UI = ({verticalLayout}) => {
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

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 800
})

export default connect(mapStateToProps)(UI)
