import React from 'react'

import { connect } from 'react-redux'

import { X } from 'obj.Layout'

const imageDirectory = '/assets/images/AsSeenIn/'

const logos = [
  {
    filename: 'ksl.png',
    height: 40,
    unimportant: true
  },
  {
    filename: 'beehive_startups.png',
    height: 40,
    unimportant: true
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

const UI = ({viewportWidth}) => {
  const mapLogoDataToNode = ({filename, height}, i) =>
    <img {...{
      key: i,
      style: {
        height: viewportWidth < 400
          ? height / 2
          : viewportWidth < 600
            ? height / 1.5
            : height
      },
      src: `${imageDirectory}${filename}`
    }} />

  return (
    <X {...{
      justify: 'space-around',
      align: 'center'
    }}>
      {viewportWidth < 1000
        ? logos.filter(logo => !logo.unimportant).map(mapLogoDataToNode)
        : logos.map(mapLogoDataToNode)
      }
    </X>
  )
}

const mapStateToProps = ({viewState: {viewportSize}}) => ({
  viewportWidth: viewportSize.width
})

export default connect(mapStateToProps)(UI)
