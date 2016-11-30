import React from 'react'

import { X } from 'obj.Layout'
import H from 'atm.Header'

import bulletsSvg from './bullets.svg'

const packagesIncludeData = [
  {
    icon: '',
    text: 'Stories'
  },
  {
    icon: '',
    text: 'Records'
  },
  {
    icon: '',
    text: 'Pictures'
  },
  {
    icon: '',
    text: 'Memories'
  }
]

const bullets = packagesIncludeData.map(({icon, text}, i) =>
  <div key={i}>
    <X>
      <img src={icon} />
      <div>{text}</div>
    </X>
  </div>
)

export default () =>
  <X>
    <X x>
      <X>
        <div>
          <img {...{
            src: '/Main2/bookmark.svg',
            style: {
              width: '30px',
              marginRight: '16px'
            }
          }} />
        </div>
        <div>
          <H {...{
            copy: 'Everyone has a story. Find yours.',
            level: 2
          }} />
          <div>{`Each family is unique, a story waiting to be told. We'll provide you with the people and history you never knew without tedious research. With Trace, learning about you has never been easier.`}</div>
          <div>Trace packages include:</div>
          <img src='/Main2/bullets.svg' />
        </div>
      </X>
    </X>
    <div>
      <img {...{
        src: '/Main2/worldoftrace.svg',
        width: '400px'
      }} />
    </div>
  </X>
