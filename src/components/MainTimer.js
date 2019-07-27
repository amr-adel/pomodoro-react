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

  const calcRectProgress = () => {
    const dashGap = 7 - (state.progress - 93)
    return (state.progress > 93 ? `93, ${dashGap}` : `${state.progress}, 100`)
  }

  return (
    <div className='main-timer'>
      <svg className='progress'>
        <rect className='rect-fill' width='100%' height='100%' rx='25%' ry='25%' />
        <rect className='rect-progress' width='100%' height='100%' rx='25%' ry='25%' pathLength='100' strokeDasharray={calcRectProgress()} />
      </svg>
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
