import React from 'react'

import { X } from 'obj.Layout'

export default () =>
  <X x>
    <div>
      <h2>{`Give the gift of family`}</h2>
      <div>{`Each family is unique, a story waiting to be told. We'll provide you the people and history you never knew.`}</div>
      <button>Give Trace as a Gift</button>
    </div>
    <div>
      <img {...{
        src: '/Gift/gift.svg',
        style: {
          width: '300px'
        }
      }} />
    </div>
  </X>
