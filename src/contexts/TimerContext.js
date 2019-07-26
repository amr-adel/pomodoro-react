import React, { createContext, useReducer, useEffect } from 'react'
import { timerReducer, initialState } from '../reducers/timerReducer'

export const TimerContext = createContext()

const TimerContextProvider = props => {
  const [state, dispatch] = useReducer(timerReducer, {}, () => {
    const localState = localStorage.getItem('timerState')
    return localState ? { ...JSON.parse(localState), active: false } : { ...initialState }
  })

  useEffect(() => {
    localStorage.setItem('timerState', JSON.stringify(state))
  })

  return <TimerContext.Provider value={{ state, dispatch }}>{props.children}</TimerContext.Provider>
}

export default TimerContextProvider
