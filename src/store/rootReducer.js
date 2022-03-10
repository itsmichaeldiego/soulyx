// ------------- Root Reducer -------------

// individual reducers
import introEndedReducer from './reducers/introEnded'

import { logger } from './middlewares'

// Default Global state of application at launch
export const initialState = {
  introEnded: introEndedReducer.initialState,
}

const rootReducer = (state, action) => {
  // Receiving previous state here
  const { introEnded } = state

  // Receiving current state here
  const currentState = {
    introEnded: introEndedReducer.reducer(introEnded, action),
  }

  // Middlewares
  logger(action, state, currentState)

  return currentState
}

export default rootReducer
