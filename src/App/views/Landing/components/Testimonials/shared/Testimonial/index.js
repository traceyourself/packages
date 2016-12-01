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
      <div>
        <div style={{
          color: colors.slate[2],
          fontWeight: 'bold',
          fontSize: '1.5em'
        }}>{name}</div>
        <X x>
          <img {...{
            src: icon,
            style: {
              marginRight: '6px',
              maxWidth: '20px',
              maxHeight: '20px'
            }
          }} />
          <div style={{
            color: colors.heather[0],
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}>{subtitle}</div>
        </X>
      </div>
      <div>{quote}</div>
    </div>
  </X>

const iconHeight = 60

const styles = StyleSheet.create({
  avatar: {
    borderRadius: '50%',
    width: '90px'
  },
  icon: {
    height: `${iconHeight}px`
  }
})
