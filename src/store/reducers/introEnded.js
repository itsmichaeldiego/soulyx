// #1 Initial state
const initialState = false

// #2 Possible fixed Actions on the state
function setIntroEnded(value) {
  return {
    type: 'SET_INTRO',
    payload: value,
  }
}

// #3 Dispatch above actions with the help of reducers
function introEndedReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INTRO':
      return action?.payload

    default:
      return state
  }
}

export default {
  initialState,
  actions: { setIntroEnded },
  reducer: introEndedReducer,
}
