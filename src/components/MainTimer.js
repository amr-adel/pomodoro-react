import React, { useContext } from 'react'
import icons from '../icons.svg'
import { TimerContext } from '../contexts/TimerContext'

const MainTimer = () => {
  const { state, dispatch } = useContext(TimerContext)

  return (
    <div className='main-timer'>
      <div id='timer-label'>session</div>
      <div id='time-left'>25:00</div>
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
