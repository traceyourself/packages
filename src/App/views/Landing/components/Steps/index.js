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
    title: `Select your Trace package`,
    content: `Our experts will provide the research necessary to help you on your journey to discover your family's story. Choose between our Origins Package or the Lineage Package and fill out a short survey about your family.`
  },
  {
    screenshot: `${imagesDirectory}research.svg`,
    number: `${imagesDirectory}number2.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `We do the hard research`,
    content: `We will hand-pick an experienced researcher, best suited to uncover your story. They will do all the heavy living in research and compiling your family’s narrative.`
  },
  {
    screenshot: `${imagesDirectory}openbox.svg`,
    number: `${imagesDirectory}number3.svg`,
    icon: `${imagesDirectory}howitworksplaceholder.svg`,
    title: `Receive your Trace package in the mail!`,
    content: `Within a month of placing your order, you’ll receive expert research on your family, complete with bios, documents, pictures and more. If you're not completely satisfied, just reach out and we'll give you your money back!`
  }
]

const UI = ({compactLayout}) =>
  <Y y>
    <H {...{
      copy: 'How It Works',
      level: 2
    }} />
    {stepsData.map(({screenshot, number, icon, title, content}, i) => {
      const stepNode =
        <Step {...{
          number,
          image: icon,
          title,
          content,
          compact: compactLayout
        }} />

      return compactLayout
        ? (
          <Y y {...{
            style: {
              marginTop: i > 0 ? '200px' : '100px',
              flexDirection: i % 2 ? 'row' : 'row-reverse'
            },
            key: i
          }}>
            <img {...{
              src: screenshot,
              style: {
                marginBottom: '16px',
                width: '100%',
                maxWidth: '300px'
              }
            }} />
            {stepNode}
          </Y>
        )
        : (
          <X x {...{
            style: {
              marginTop: i > 0 ? '200px' : '100px',
              flexDirection: i % 2 ? 'row' : 'row-reverse'
            },
            key: i
          }}>
            <div {...{
              style: {
                margin: i % 2 ? '0 32px 0 0' : '0 0 0 32px'
              }
            }}>
              <img {...{
                src: screenshot,
                style: {
                  width: '400px',
                  maxHeight: '280px'
                }
              }} />
            </div>
            {stepNode}
          </X>
        )
    })}
  </Y>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  compactLayout: viewportSize.width < 950
})

export default connect(mapStateToProps)(UI)

const styles = StyleSheet.create({
})
