import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'

import { colors } from 'App/style/settings'

const triangle =
  <img {...{
    src: '/assets/images/Testimonials/triangle.svg',
    style: {
      position: 'absolute',
      top: '6px',
      left: '-28px',
      transform: 'rotate(180deg)',
      width: '29px',
      height: '39px'
    }
  }} />

const TestimonialUI = ({
  avatar, name, subname, quote,
  verticalLayout
}) => {
  const nameNode =
    <div style={{
      color: colors.slate[2],
      fontWeight: 'bold',
      fontSize: '1.1em'
    }}>{name}, {subname}</div>

  const quoteNode =
    <div {...{
      width: '40',
      height: '40',
      style: {
        position: 'relative',
        marginTop: '8px',
        borderRadius: '12px',
        border: '2px solid #99B0C3',
        backgroundColor: '#EAF5FF',
        padding: '20px'
      }
    }}>
      {!verticalLayout && triangle}
      <div>{'"'}{quote}{'"'}</div>
    </div>

  const avatarSize = verticalLayout ? '40px' : '80px'
  const avatarNode =
    <img {...{
      src: avatar,
      style: {
        borderRadius: '50%',
        width: avatarSize,
        height: avatarSize
      }
    }} />

  return verticalLayout
    ? (
      <Y>
        <X x>
          <div style={{marginRight: '8px'}}>
            {avatarNode}
          </div>
          {nameNode}
        </X>
        {quoteNode}
      </Y>
    )
    : (
      <X y>
        <div style={{
          marginTop: '14px',
          marginRight: '32px'
        }}>
          {avatarNode}
        </div>
        <div>
          {nameNode}
          {quoteNode}
        </div>
      </X>
    )
}

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 600
})

export default connect(mapStateToProps)(TestimonialUI)
