import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import Step from './shared/Step'
import H from 'atm.Header'

import { StyleSheet, css } from 'aphrodite'

const imagesDirectory = '/assets/images/HowItWorks/'

const screenshot = `${imagesDirectory}screenshot.jpg`

const stepsData = [
  {
    screenshot: `${imagesDirectory}step1.svg`,
    number: `${imagesDirectory}number1.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Select your research package`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  },
  {
    screenshot: `${imagesDirectory}step2.svg`,
    number: `${imagesDirectory}number2.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Fill out a short survey about your family`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  },
  {
    screenshot: `${imagesDirectory}step3.svg`,
    number: `${imagesDirectory}number3.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Receive results from your research experts`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  }
]

const UI = ({compactLayout}) =>
  <Y y>
    <H {...{
      copy: 'How It Works',
      level: 2
    }}/>
    {stepsData.map(({screenshot, number, icon, title, content}, i) =>
      <X x {...{
        style: {
          marginTop: i > 0 ? '200px' : '100px',
          flexDirection: i % 2 ? 'row' : 'row-reverse'
        },
        key: i
      }}>
        {!compactLayout &&
          <div {...{
            style: {
              margin: i % 2 ? '0 32px 0 0' : '0 0 0 32px'
            }
          }}>
            <img {...{
              src: screenshot,
              style: {
                width: '400px'
              }
            }} />
          </div>
        }
        <Step {...{
          number,
          image: icon,
          title,
          content,
          compact: compactLayout
        }} />
      </X>
    )}
  </Y>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  compactLayout: viewportSize.width < 950
})

export default connect(mapStateToProps)(UI)

const styles = StyleSheet.create({
})
