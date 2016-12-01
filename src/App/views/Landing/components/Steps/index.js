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
    content: `Our experts will provide the research to help you discover the most of your family story. Choose between our Origins Package or the Lineage Package.`
  },
  {
    screenshot: `${imagesDirectory}step2.svg`,
    number: `${imagesDirectory}number2.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Fill out a short survey about your family`,
    content: `Help us help you! Fill out a short survey about your family so you can have the most accurate information.`
  },
  {
    screenshot: `${imagesDirectory}step3.svg`,
    number: `${imagesDirectory}number3.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Enjoy results from your research experts`,
    content: `Be prepared to discover treasured memories and stories from your own family line! We guarantee the very best from our experts, and if you're not completely satisfied, just reach out and we'll give you your money back!`
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
