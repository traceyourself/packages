import React from 'react'

import { X, Y } from 'obj.Layout'
import Step from './shared/Step'

import { StyleSheet, css } from 'aphrodite'

const screenshot = '/HowItWorks/screenshot.jpg'

const stepsData = [
  {
    screenshot,
    number: '/HowItWorks/number1.svg',
    icon: '/HowItWorks/howitworksplaceholder.svg',
    title: `Select your research package`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  },
  {
    screenshot,
    number: '/HowItWorks/number2.svg',
    icon: '/HowItWorks/howitworksplaceholder.svg',
    title: `Select your research package`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  },
  {
    screenshot,
    number: '/HowItWorks/number3.svg',
    icon: '/HowItWorks/howitworksplaceholder.svg',
    title: `Select your research package`,
    content: `Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`
  }
]

export default () =>
  <Y>
    {stepsData.map(({screenshot, number, icon, title, content}, i) =>
      <X x {...{
        style: {
          flexDirection: i % 2 ? 'row' : 'row-reverse'
        },
        key: i
      }}>
        <div>
          <img {...{ src: screenshot, className: css(styles.screenshot) }} />
        </div>
        <Step {...{
          number,
          image: icon,
          title,
          content
        }} />
      </X>
    )}
  </Y>

const styles = StyleSheet.create({
  screenshot: {
    width: '200px'
  }
})
