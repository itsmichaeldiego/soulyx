import { useGlobalStore } from '../store'

import bindActions from '../store/bindActions'
import introEndedReducer from '../store/reducers/introEnded'

// Custom Hook to expose all the props and binded actions
const useIntroEnded = () => {
  const { state, dispatch } = useGlobalStore()

  // List of Props
  const introEnded = state?.introEnded

  // List of Actions
  const setIntroEnded = introEndedReducer?.actions?.setIntroEnded

  // Bind all Actions to globalDispatch (important)
  const boundActions = bindActions({ setIntroEnded }, dispatch)

  // expose
  return { introEnded, ...boundActions }
}

export default useIntroEnded
