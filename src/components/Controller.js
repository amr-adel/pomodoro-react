import React from 'react'
import icons from '../icons.svg'

const Controller = ({ type }) => {
  return (
    <div className={`controller ${type}-controller`}>
      <div className='control-box'>
        <div id={`${type}-length`} className='length'>
          {type === 'break' ? 5 : 25}
        </div>
        <button id={`${type}-increment`} className='increment'>
          <svg>
            <use href={`${icons}#plus`} />
          </svg>
        </button>
        <button id={`${type}-decrement`} className='decrement'>
          <svg>
            <use href={`${icons}#minus`} />
          </svg>
        </button>
      </div>

      <div id={`${type}-label`} className='label'>
        {type}
      </div>
    </div>
  )
}

export default Controller
