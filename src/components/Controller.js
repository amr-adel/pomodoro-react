import React, { useContext } from 'react'
import icons from '../icons.svg'
import { TimerContext } from '../contexts/TimerContext'

const Controller = ({ controllerLabel }) => {
  const { state, dispatch } = useContext(TimerContext)

  return (
    <div className={`controller ${controllerLabel}-controller`}>
      <div className='control-box'>
        <div id={`${controllerLabel}-length`} className='length'>
          {state[`${controllerLabel}Length`]}
        </div>
        <button
          id={`${controllerLabel}-increment`}
          className='increment'
          onClick={() => dispatch({ type: `${controllerLabel.toUpperCase()}_INC` })}>
          <svg>
            <use href={`${icons}#plus`} />
          </svg>
        </button>
        <button
          id={`${controllerLabel}-decrement`}
          className='decrement'
          onClick={() => dispatch({ type: `${controllerLabel.toUpperCase()}_DEC` })}>
          <svg>
            <use href={`${icons}#minus`} />
          </svg>
        </button>
      </div>

      <div id={`${controllerLabel}-label`} className='label'>
        {controllerLabel}
      </div>
    </div>
  )
}

export default Controller
