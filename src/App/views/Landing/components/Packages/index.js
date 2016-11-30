import React from 'react'

import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Package from './shared/Package'

import { packages } from 'config.definitions'

import { mapToArray } from 'utils'

const UI = ({verticalLayout}) => {
  const packagesNodes = mapToArray(packages).map((data, i) =>
    <div key={i}>
      <Package {...data} />
    </div>
  )
  return (
    <Y y>
      <h2>{`Choose the perfect package`}</h2>
      <div>{`Trace packages are the easy way to find the information you want about your family`}</div>
      {verticalLayout
        ? <Y>{packagesNodes}</Y>
        : <X>{packagesNodes}</X>
      }
    </Y>
  )
}

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 600
})

export default connect(mapStateToProps)(UI)
