import React from 'react'

import { StyleSheet, css } from 'aphrodite'

import { X } from 'obj.Layout'
import H from 'atm.Header'

const Step = ({number, image, title, content, compact}) => {
  const numberNode =
    <div style={{marginRight: '14px'}}>
      <img className={css(styles.number)} src={number} />
    </div>

  const titleNode =
    <H {...{
      copy: title,
      level: 2,
      style: compact && {
        fontSize: '1.3em'
      }
    }}/>

  return compact
    ? (
      <div>
        <X x style={{
          marginBottom: '16px'
        }}>
          {numberNode}
          {titleNode}
        </X>
        {content}
      </div>
    )
    : (
      <X>
        {numberNode}
        <div>
          <div style={{marginBottom: '24px'}}>
            {titleNode}
          </div>
          <div>{content}</div>
        </div>
      </X>
    )
}

export default Step

const numberSize = 60
const styles = StyleSheet.create({
  number: {
    width: `${numberSize}px`,
    height: `${numberSize}px`
  }
})
