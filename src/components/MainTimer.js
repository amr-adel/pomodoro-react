import React, { useContext, useEffect } from 'react'
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

  useEffect(() => {
    if (state.active) {
      let timerID = setInterval(() => dispatch({ type: 'TICK' }), 1000)

      return () => {
        clearInterval(timerID)
      }
    }
  })

  const handlePlayPause = active => {
    dispatch({ type: active ? 'STOP_TIMER' : 'START_TIMER' })
  }

  return (
    <div className='main-timer'>
      <div id='timer-label'>{state.mainTimerLabel}</div>
      <div id='time-left'>{renderTimeLeft()}</div>
      <div className='controls'>
        <button id='start_stop' onClick={() => handlePlayPause(state.active)}>
          <svg>
            <use href={`${icons}#${state.active ? 'pause' : 'play'}`} />
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
