import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import { X } from 'obj.Layout'

const links = [
  { copy: 'Get Help', link: '/' },
  { copy: 'Community', link: '/' },
  { copy: 'About', link: '/' },
  { copy: 'Login', link: '/' }
]

const Nav = () =>
  <X x spaced className={css(styles.container)}>
    <div>
      <img {...{
        src: '/assets/images/Nav/wordmark-blue.svg',
        style: {
          height: '24px'
        }
      }} />
    </div>
    <X>
      {links.map(({copy, link}, i) =>
        <a {...{
          key: i,
          href: link,
          className: css(styles.link)
        }}>{copy}</a>
      )}
    </X>
  </X>

export default Nav

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },

  link: {
    margin: '0 16px',
    fontWeight: 'bold',
    color: colors.slate[2],
    textDecoration: 'none'
  }
})
