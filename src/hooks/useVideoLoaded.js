import { useGlobalStore } from '../store'

import bindActions from '../store/bindActions'
import videoLoadedReducer from '../store/reducers/videoLoaded'

// Custom Hook to expose all the props and binded actions
const useVideoLoaded = () => {
  const { state, dispatch } = useGlobalStore()

  // List of Props
  const videoLoaded = state?.videoLoaded

  // List of Actions
  const setVideoLoaded = videoLoadedReducer?.actions?.setVideoLoaded

  // Bind all Actions to globalDispatch (important)
  const boundActions = bindActions({ setVideoLoaded }, dispatch)

  // expose
  return { videoLoaded, ...boundActions }
}

export default useVideoLoaded
