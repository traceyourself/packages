import React from 'react'

import { X, Y } from 'obj.Layout'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

export default ({avatar, name, subname, quote}) =>
  <X y>
    <div style={{
      marginRight: '16px'
    }}>
      <img {...{ src: avatar, className: css(styles.avatar) }} />
    </div>
    <div>
      <div style={{
        color: colors.slate[2],
        fontWeight: 'bold',
        fontSize: '1.1em'
      }}>{name}, {subname}</div>
      <div {...{
        style: {
          marginTop: '8px',
          borderRadius: '12px',
          border: '2px solid #99B0C3',
          backgroundColor: '#E5F0FA',
          padding: '20px'
        }
      }}>{'"'}{quote}{'"'}</div>
    </div>
  </X>

const styles = StyleSheet.create({
  avatar: {
    borderRadius: '50%',
    width: '90px'
  }
})
