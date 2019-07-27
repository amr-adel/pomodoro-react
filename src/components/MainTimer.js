import React, { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'
import icons from '../icons.svg'

const MainTimer = () => {
  const { state, dispatch } = useContext(TimerContext)

  const renderTimeLeft = () => {
    const { minutes, seconds } = state.timeLeft
    const renderMinutes = minutes < 10 ? `0${minutes}` : minutes
    const renderSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${renderMinutes}:${renderSeconds}`
  }

  const handlePlayPause = active => {
    if (!active) {
      dispatch({ type: 'START_TIMER' })
      window.timerID = setInterval(() => dispatch({ type: 'TICK' }), 1000)
    } else {
      clearInterval(window.timerID)
      dispatch({ type: 'STOP_TIMER' })
    }
  }

  return (
    <div className='main-timer'>
      <aside className='progress-bar' style={{width: state.progress + '%'}} />
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
