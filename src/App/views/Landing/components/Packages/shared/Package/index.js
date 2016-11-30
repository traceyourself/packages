import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { X, Y } from 'obj.Layout'
import Btn from 'atm.Btn'

export default ({icon, name, subtitle, checklist, price, disabled}) =>
  <Y y {...{
    style: disabled && {
      opacity: '0.5'
    }
  }}>
    <img {...{ src: icon, className: css(styles.icon) }} />
    <h2>{name}</h2>
    <div>{subtitle}</div>
    <ul {...{ className: css(styles.checklist) }}>
      {checklist.map((item, i) =>
        <li key={i}>{item}</li>
      )}
    </ul>
    <div>${price}</div>
    <Btn copy='Get This Package' />
  </Y>

const styles = StyleSheet.create({
  icon: {
    height: '60px'
  },
  checklist: {
    height: '100px'
  }
})
