import React from 'react'

import { X } from 'obj.Layout'
import H from 'atm.Header'
import Btn from 'atm.Btn'

export default () =>
  <X x>
    <div>
      <img {...{
        src: '/Main1/hero1.svg',
        width: '400px'
      }} />
    </div>
    <div>
      <H {...{
        level: 2,
        copy: 'Yourself, discovered'
      }} />
      <div>{`You belong to a family narrative that is bigger than yourself, it's time to find out what that is.`}</div>
      <div>
        <Btn copy='Sign Up' />
      </div>
    </div>
  </X>
