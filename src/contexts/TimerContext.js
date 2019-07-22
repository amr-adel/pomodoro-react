import React, { createContext, useReducer } from 'react'
import { timerReducer } from '../reducers/timerReducer'

export const TimerContext = createContext()

export const initialState = {
  sessionLength: 25,
  breakLength: 5,
  mainTimerLabel: 'session',
  active: false,
  timeLeft: {
    minutes: 0,
    seconds: 0
  }
}

const TimerContextProvider = props => {
  const [state, dispatch] = useReducer(timerReducer, initialState)

  return <TimerContext.Provider value={{ state, dispatch }}>{props.children}</TimerContext.Provider>
}

export default TimerContextProvider
