import React from 'react'
import { connect } from 'react-redux'

import { colors } from 'App/style/settings'

import { X, Y } from 'obj.Layout'
import H from 'atm.Header'

import { questions } from 'config.definitions'

const spacing = '90px'

const questions1 = [ questions[0], questions[2], questions[4], questions[5] ]
const questions2 = [ questions[1], questions[3], questions[6], questions[7] ]

const QAndA = ({q, a}) =>
  <div style={{color: '#DCDEE0'}}>
    <div {...{
      style: {
        marginBottom: '10px',
        fontWeight: 'bold'
      }
    }}>{q}</div>
    <div>{a}</div>
  </div>

const mapQuestionToQAndA = ({q, a}, i) =>
  <div {...{
    key: i,
    style: {
      marginTop: spacing
    }
  }}>
    <QAndA {...{
      q, a
    }} />
  </div>

const UI = ({verticalLayout}) =>
  <div {...{
    style: {
      position: 'relative'
    }
  }}>
    <H {...{
      copy: 'Still have questions?',
      level: 2,
      style: {
        color: colors.blue[0]
      }
    }} />
    {verticalLayout
      ? <div>{questions.map(mapQuestionToQAndA)}</div>
      : (
        <X>
          <Y align='justify' {...{
            style: {
              width: '50%'
            }
          }}>{questions1.map(mapQuestionToQAndA)}</Y>
          <Y align='justify' {...{
            style: {
              marginLeft: spacing,
              width: '50%'
            }
          }}>{questions2.map(mapQuestionToQAndA)}</Y>
        </X>
      )
    }
  </div>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 900
})

export default connect(mapStateToProps)(UI)
