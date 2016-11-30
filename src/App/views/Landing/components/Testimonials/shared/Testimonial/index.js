import React from 'react'

import { X, Y } from 'obj.Layout'

import { StyleSheet, css } from 'aphrodite'

export default ({avatar, name, subname, subtitle, icon, quote}) =>
  <X>
    <div>
      <img {...{ src: avatar, className: css(styles.avatar) }} />
    </div>
    <div>
      <X x>
        <div>
          <img {...{ src: icon, className: css(styles.icon) }} />
        </div>
        <div>
          <div>{name}, {subname}</div>
          <div>{subtitle}</div>
        </div>
      </X>
      <div>{quote}</div>
    </div>
  </X>

const styles = StyleSheet.create({
  avatar: {
    width: '50px'
  },
  icon: {
    height: '60px'
  }
})
