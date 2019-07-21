import React from 'react'
import icons from '../icons.svg'

const MainTimer = () => {
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
        <button id='reset'>
          <svg>
            <use href={`${icons}#reset`} />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MainTimer
