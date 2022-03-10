// ------------- Root Reducer -------------

// individual reducers
import introEndedReducer from './reducers/introEnded'
import videoLoadedReducer from './reducers/videoLoaded'

import { logger } from './middlewares'

// Default Global state of application at launch
export const initialState = {
  introEnded: introEndedReducer.initialState,
  videoLoaded: videoLoadedReducer.initialState,
}

const rootReducer = (state, action) => {
  // Receiving previous state here
  const { introEnded, videoLoaded } = state

  // Receiving current state here
  const currentState = {
    introEnded: introEndedReducer.reducer(introEnded, action),
    videoLoaded: videoLoadedReducer.reducer(videoLoaded, action),
  }

  // Middlewares
  logger(action, state, currentState)

  return currentState
}

export default rootReducer
