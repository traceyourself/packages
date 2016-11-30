import { combineReducers } from 'redux'
import { createReducer } from 'utils.redux'

import { VIEWPORT_SIZE_UPDATE } from './actions'

const initialState = {
  viewState: {
    viewportSize: {
      width: 1000,
      height: 1000,
      name: 'narrow'
    }
  }
}

export const viewState = combineReducers({
  viewportSize: createReducer(initialState.viewState.viewportSize, {
    [VIEWPORT_SIZE_UPDATE]: (state, { payload }) => payload.size
  })
})
