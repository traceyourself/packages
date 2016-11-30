import React from 'react'

import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'

const imageDirectory = '/assets/images/AsSeenIn/'

const logos = [
  {
    filename: 'ksl.png',
    height: 40
  },
  {
    filename: 'beehive_startups.png',
    height: 40
  },
  {
    filename: 'techstars.png',
    height: 50
  },
  {
    filename: 'forbes.png',
    height: 30
  },
  {
    filename: 'business_insider.png',
    height: 50
  },
  {
    filename: 'product_hunt.png',
    height: 45
  }
]

const logoNodes = logos.map(({filename, height}, i) =>
  <div key={i}>
    <img {...{
      style: {
        height,
        margin: '20px'
      },
      src: `${imageDirectory}${filename}`
    }} />
  </div>
)

const UI = ({verticalLayout}) =>
  <X {...{
    justify: 'center',
    align: 'center',
    wrap: 'wrap',
    style: {
      padding: '16px 0'
    }
  }}>{logoNodes}</X>

const mapStateToProps = ({viewState: {viewportSize}}) => ({
  verticalLayout: viewportSize.width < 300
})

export default connect(mapStateToProps)(UI)
