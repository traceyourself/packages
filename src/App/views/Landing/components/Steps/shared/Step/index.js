import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { X } from 'obj.Layout'
import H from 'atm.Header'

const Step = ({number, image, title, content}) =>
  <X>
    <div className={css(styles.numberWrapper)}>
      <img className={css(styles.number)} src={number} />
    </div>
    <div>
      <div>
        <img className={css(styles.image)} src={image} />
      </div>
      <H level={2}>{title}</H>
      <div>{content}</div>
    </div>
  </X>

export default Step

const imageHeight = 80
const numberSize = '80px'
const imageMarginBotton = 16
const numberPadding = imageHeight + imageMarginBotton
const styles = StyleSheet.create({
  numberWrapper: {
    paddingTop: numberPadding,
    width: numberSize,
    height: numberSize
  },

  number: {
    width: numberSize,
    height: numberSize
  },

  image: {
    marginBottom: imageMarginBotton,
    height: imageHeight
  }
})
