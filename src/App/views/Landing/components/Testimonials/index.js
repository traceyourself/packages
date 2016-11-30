import React from 'react'

import { testimonials } from 'config.definitions'

import Testimonial from './shared/Testimonial'

export default () =>
  <div>
    {testimonials.map(({person, package: pkg, quote}, i) =>
      <div key={i}>
        <Testimonial {...{
          name: person.name,
          avatar: person.avatar,
          subname: person.title,
          subtitle: pkg.name,
          icon: pkg.icon,
          quote,
          key: i
        }} />
      </div>
    )}
  </div>
