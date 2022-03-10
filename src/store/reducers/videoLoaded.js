// #1 Initial state
const initialState = false

// #2 Possible fixed Actions on the state
function setVideoLoaded(value) {
  return {
    type: 'SET_VIDEO_LOADED',
    payload: value,
  }
}

// #3 Dispatch above actions with the help of reducers
function videoLoadedReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VIDEO_LOADED':
      return action?.payload

    default:
      return state
  }
}

export default {
  initialState,
  actions: { setVideoLoaded },
  reducer: videoLoadedReducer,
}
