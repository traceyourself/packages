import React from 'react'
import { connect } from 'react-redux'

import { testimonials } from 'config.definitions'

import Carousel from 'nuka-carousel'
import { X } from 'obj.Layout'
import Testimonial from './shared/Testimonial'

const Testimonials = ({narrowView}) =>
  <Carousel {...{
    autoplay: true,
    autoplayInterval: 5000,
    wrapAround: true,
    decorators: narrowView ? [] : undefined
  }}>
    {testimonials.map(({person, quote}, i) =>
      <div {...{
        key: i,
        style: {
          padding: narrowView ? '0' : '0 80px'
        }
      }}>
        <X x y style={{minHeight: '240px'}}>
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

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  narrowView: viewportSize.width < 700
})

export default connect(mapStateToProps)(Testimonials)
