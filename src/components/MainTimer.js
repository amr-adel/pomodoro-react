import React, { useContext } from 'react'
import icons from '../icons.svg'
import { TimerContext } from '../contexts/TimerContext'

const MainTimer = () => {
  const { state, dispatch } = useContext(TimerContext)

  const renderTimeLeft = () => {
    const { minutes, seconds } = state.timeLeft
    const renderMinutes = minutes < 10 ? `0${minutes}` : minutes
    const renderSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${renderMinutes}:${renderSeconds}`
  }

  return (
    <div className='main-timer'>
      <div id='timer-label'>{state.mainTimerLabel}</div>
      <div id='time-left'>{renderTimeLeft()}</div>
      <div className='controls'>
        <button id='start_stop'>
          <svg>
            <use href={`${icons}#play`} />
          </svg>
        </button>
        <button id='reset' onClick={() => dispatch({ type: 'RESET' })}>
          <svg>
            <use href={`${icons}#reset`} />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MainTimer
