import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'

import { colors } from 'App/style/settings'

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
      style: {
        marginTop: '8px',
        borderRadius: '12px',
        border: '2px solid #99B0C3',
        backgroundColor: '#E5F0FA',
        padding: '20px'
      }
    }}>{'"'}{quote}{'"'}</div>

  const avatarSize = verticalLayout ? '30px' : '90px'
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
          marginRight: '16px'
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
