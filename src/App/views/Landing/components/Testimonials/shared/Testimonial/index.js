import React from 'react'

import { X, Y } from 'obj.Layout'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

export default ({avatar, name, subname, subtitle, icon, quote}) =>
  <X>
    <div style={{
      marginRight: '16px'
    }}>
      <img {...{ src: avatar, className: css(styles.avatar) }} />
    </div>
    <div>
      <X x>
        <div style={{
          marginRight: '16px'
        }}>
          <img {...{ src: icon, className: css(styles.icon) }} />
        </div>
        <div>
          <div style={{
            color: colors.slate[2],
            fontWeight: 'bold'
          }}>{name}, {subname}</div>
          <div style={{
            color: colors.heather[0],
            fontWeight: 'bold'
          }}>{subtitle}</div>
        </div>
      </X>
      <div>{quote}</div>
    </div>
  </X>

const iconHeight = 60

const styles = StyleSheet.create({
  avatar: {
    marginTop: `${iconHeight}px`,
    width: '50px'
  },
  icon: {
    height: `${iconHeight}px`
  }
})
