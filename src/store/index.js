// GlobalStore
import React, { createContext, useContext, useReducer, useCallback } from 'react'

import { asyncer } from './middlewares'
import rootReducer, { initialState } from './rootReducer'

const GlobalStore = createContext({})

export const useGlobalStore = () => useContext(GlobalStore)

const Provider = ({ children }) => {
  const [state, dispatchBase] = useReducer(rootReducer, initialState)

  const dispatch = useCallback(asyncer(dispatchBase, state), [])

  return <GlobalStore.Provider value={{ state, dispatch }}>{children}</GlobalStore.Provider>
}

export default Provider
