import React from 'react'

import { testimonials } from 'config.definitions'

import Carousel from 'nuka-carousel'
import Testimonial from './shared/Testimonial'

export default () =>
  <Carousel {...{
    autoplay: true,
    autoplayInterval: 6000,
    wrapAround: true,
    decorators: []
  }}>
    {testimonials.map(({person, quote}, i) =>
      <div key={i}>
        <Testimonial {...{
          name: person.name,
          avatar: person.avatar,
          subname: person.location,
          quote,
          key: i
        }} />
      </div>
    )}
  </Carousel>
