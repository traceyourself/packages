import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { X, Y } from 'obj.Layout'
import Btn from 'atm.Btn'

export default ({icon, name, subtitle, checklist, price, disabled}) =>
  <Y y {...{
    style: {
      border: '1px solid #000',
      padding: '32px',
      opacity: disabled ? '0.5' : '1.0'
    }
  }}>
    <X x y style={{
      borderRadius: '50%',
      backgroundColor: '#F0F3F5',
      width: '100px',
      height: '100px',
      padding: '32px'
    }}>
      <img {...{ src: icon, className: css(styles.icon) }} />
    </X>
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
    maxHeight: '60px',
    maxWidth: '60px'
  },
  checklist: {
    height: '100px'
  }
})
