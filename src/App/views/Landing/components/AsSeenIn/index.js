import React from 'react'

import { connect } from 'react-redux'

import { StyleSheet, css } from 'aphrodite'

import { X, Y } from 'obj.Layout'

const imageDirectory = 'AsSeenIn/'

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
    height: 35
  }
]

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  image: {
    margin: '20px'
  }
})

const logoNodes = logos.map(({filename, height}, i) =>
  <div key={i}>
    <img {...{
      className: css(styles.image),
      style: {
        height
      },
      src: `${imageDirectory}${filename}`
    }} />
  </div>
)

const UI = ({verticalLayout}) =>
  <X {...{
    justify: 'center',
    align: 'center',
    wrap: 'wrap'
  }}>{logoNodes}</X>

const mapStateToProps = ({viewState: {viewportSize}}) => ({
  verticalLayout: viewportSize.width < 300
})

export default connect(mapStateToProps)(UI)
