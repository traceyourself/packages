import React from 'react'

import { testimonials } from 'config.definitions'

import Carousel from 'nuka-carousel'
import { X } from 'obj.Layout'
import Testimonial from './shared/Testimonial'

export default () =>
  <Carousel {...{
    autoplay: true,
    autoplayInterval: 5000,
    wrapAround: true,
    decorators: []
  }}>
    {testimonials.map(({person, quote}, i) =>
      <div key={i}>
        <X x y style={{minHeight: '200px'}}>
          <Testimonial {...{
            name: person.name,
            avatar: person.avatar,
            subname: person.location,
            quote,
            key: i
          }} />
        </X>
      </div>
    )}
  </Carousel>
