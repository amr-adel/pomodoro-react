import React from 'react'
import icons from '../icons.svg'
import { loadFCCTestSuite } from './LoadFCCTS'

const ModalContent = () => {
  return (
    <>
      <div className='about'>
        <h3 className='title'>Pomodoro Clock</h3>
        <p className='text'>
          This project was part of the{' '}
          <a
            href='https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock/'
            target='_blank'
            rel='noopener noreferrer'>
            FreeCodeCamp
          </a>{' '}
          Front End Libraries Certification, which requires using a frontend framework to build a Pomodoro Clock. the
          project must fulfill all the user stories and get all the tests passed.
        </p>
        <p className='text'>
          In this project, I'm using{' '}
          <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
            React
          </a>{' '}
          with its new{' '}
          <a href='https://reactjs.org/docs/context.html' target='_blank' rel='noopener noreferrer'>
            Context API
          </a>{' '}
          and{' '}
          <a href='https://reactjs.org/docs/hooks-intro.html' target='_blank' rel='noopener noreferrer'>
            Hooks
          </a>{' '}
          to build a functional Pomodoro clock.
        </p>
        <p className='text'>
          {' '}
          <a href='https://reactjs.org/docs/portals.html' target='_blank' rel='noopener noreferrer'>
            Portal
          </a>{' '}
          was used too, to create this beautiful modal.{' '}
        </p>
        <button onClick={() => loadFCCTestSuite()}>load FCC Test Suite</button>
        <p className='text'>
          Interested in code? Check the project's repository on{' '}
          <a href='https://github.com/amr-adel/pomodoro-react' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          .
        </p>
      </div>
      <div className='follow'>
        <h3 className='title'>Get in touch</h3>
        <p className='text'>
          Hey, I'm Amr, and I would love to hear your thoughts about this project and any suggestions to make it better.
          Technical feedback is highly appreciated too.
        </p>
        <ul className='social'>
          <li>
            <a href='https://www.fullstackamr.com' target='_blank' rel='noopener noreferrer' title='Portfolio'>
              <svg>
                <use href={`${icons}#globe`} />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/fullstackamr' target='_blank' rel='noopener noreferrer' title='Twitter'>
              <svg>
                <use href={`${icons}#twitter`} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/amr-abdelmoez/'
              target='_blank'
              rel='noopener noreferrer'
              title='LinkedIn'>
              <svg>
                <use href={`${icons}#linkedin`} />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://github.com/amr-adel' target='_blank' rel='noopener noreferrer' title='GitHub'>
              <svg>
                <use href={`${icons}#github`} />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://codepen.io/amr-adel/' target='_blank' rel='noopener noreferrer' title='CodePen'>
              <svg>
                <use href={`${icons}#codepen`} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.freecodecamp.org/amr-adel'
              target='_blank'
              rel='noopener noreferrer'
              title='FreeCodeCamp'>
              <svg>
                <use href={`${icons}#freecodecamp`} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ModalContent
