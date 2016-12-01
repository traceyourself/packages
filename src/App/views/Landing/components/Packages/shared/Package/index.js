import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'

import { X, Y } from 'obj.Layout'
import Btn from 'atm.Btn'

export default ({icon, name, subtitle, checklist, price, link, disabled}) =>
  <div {...{
    style: {
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 0 12px 5px rgba(0, 0, 0, 0.05)',
      borderRadius: '8px',
      background: disabled ? '#F9F9F9' : 'white',
      padding: '32px',
      // opacity: disabled ? '0.5' : '1.0'
    }
  }}>
    {disabled &&
      <div {...{
        style: {
          position: 'absolute', top: '25px', right: '-34px',
          transform: 'rotate(0.125turn)',
          background: colors.blue[0],
          width: '140px',
          height: '20px',
          lineHeight: '20px',
          color: 'white',
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }}>Coming soon</div>
    }
    <Y y>
      <X x y style={{
        borderRadius: '50%',
        backgroundColor: '#F0F3F5',
        width: '100px',
        height: '100px',
        padding: '32px'
      }}>
        <img {...{
          src: icon,
          style: {
            maxHeight: '60px',
            maxWidth: '60px'
          }
        }} />
      </X>
      <div style={{
        margin: '32px 0',
        textAlign: 'center'
      }}>
        <h2>{name}</h2>
        <div style={{
          fontSize: '1.2em'
        }}>{subtitle}</div>
      </div>
      <ul {...{
        style: {
          height: '200px'
        }
      }}>
        {checklist.map((item, i) =>
          <li key={i}>
            <X x {...{
              style: {
                margin: '16px 0'
              }
            }}>
              <img {...{
                src: name === 'Lineage Package'
                  ? '/assets/images/Packages/checkmark-orange.svg'
                  : '/assets/images/Packages/checkmark-blue.svg',
                style: {
                  marginRight: '8px',
                  width: '20px',
                  height: '15px'
                }
              }} />
              <div style={{whiteSpace: 'nowrap'}}>{item}</div>
            </X>
          </li>
        )}
      </ul>
      <img {...{
        src: '/assets/images/Packages/not199.png',
        style: {
          width: '60px',
          visibility: name === 'Origins Package' ? 'visible' : 'hidden'
        }
      }}/>
      <div style={{
        marginBottom: '8px',
        fontSize: '1.5em',
        fontWeight: 'bold'
      }}>${price}</div>
      {disabled
        ? (
          <Btn {...{
            copy: 'Get This Package',
            disabled
          }} />
        )
        : (
          <a {...{
            href: link,
            className: 'typeform-share link',
            'data-mode': '2',
            target: '_blank'
          }}>
            <Btn {...{
              copy: 'Get This Package',
              disabled
            }} />
          </a>
        )
      }
    </Y>
  </div>

const styles = StyleSheet.create({
})
