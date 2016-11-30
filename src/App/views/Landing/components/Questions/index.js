import React from 'react'
import { connect } from 'react-redux'

import { X, Y } from 'obj.Layout'
import H from 'atm.Header'

import { questions } from 'config.definitions'

const spacing = '32px'

const questions1 = [ questions[0], questions[1], questions[2] ]
const questions2 = [ questions[3], questions[4], questions[5] ]

const QAndA = ({q, a}) =>
  <div>
    <div style={{fontWeight: 'bold'}}>{q}</div>
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
  <div>
    <H {...{
      copy: 'Still have questions?',
      level: 2
    }} />
    {verticalLayout
      ? <div>{questions.map(mapQuestionToQAndA)}</div>
      : (
        <X>
          <div>{questions1.map(mapQuestionToQAndA)}</div>
          <div {...{
            style: {
              marginLeft: spacing
            }
          }}>{questions2.map(mapQuestionToQAndA)}</div>
        </X>
      )
    }
  </div>

const mapStateToProps = ({ viewState: { viewportSize } }) => ({
  verticalLayout: viewportSize.width < 800
})

export default connect(mapStateToProps)(UI)
