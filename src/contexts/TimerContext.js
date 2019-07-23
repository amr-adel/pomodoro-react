import React, { createContext, useReducer } from 'react'
import { timerReducer, initialState } from '../reducers/timerReducer'

export const TimerContext = createContext()

const TimerContextProvider = props => {
  const [state, dispatch] = useReducer(timerReducer, {...initialState})

  return <TimerContext.Provider value={{ state, dispatch }}>{props.children}</TimerContext.Provider>
}

export default TimerContextProvider
