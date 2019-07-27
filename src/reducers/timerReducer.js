const beep = document.getElementById('beep')

export const initialState = {
  sessionLength: 25,
  breakLength: 5,
  mainTimerLabel: 'session',
  active: false,
  timeLeft: {
    minutes: 25,
    seconds: 0
  },
  progress: 100
}

const controlLength = (state, label, operation) => {
  let toModify = `${label}Length`

  if (operation === 'increment' && state[toModify] < 60) {
    if (label === 'session') {
      return {
        ...state,
        [toModify]: state[toModify] + 1,
        progress: 100,
        timeLeft: { minutes: state.sessionLength + 1, seconds: 0 }
      }
    }
    return { ...state, [toModify]: state[toModify] + 1 }
  } else if (operation === 'decrement' && state[toModify] > 1) {
    if (label === 'session') {
      return {
        ...state,
        [toModify]: state[toModify] - 1,
        progress: 100,
        timeLeft: { minutes: state.sessionLength - 1, seconds: 0 }
      }
    }
    return { ...state, [toModify]: state[toModify] - 1 }
  }
  return state
}

const tick = state => {
  const { minutes, seconds } = state.timeLeft

  let newState = { ...state }

  if (minutes === 0 && seconds === 0) {
    if (state.mainTimerLabel === 'session') {
      // START BREAK TIMER
      beep.play()
      newState.mainTimerLabel = 'break'
      newState.timeLeft = { minutes: state.breakLength, seconds: 0 }
    } else {
      beep.play()
      clearInterval(window.timerID)
      newState = { ...initialState }
    }
  } else if (seconds === 0) {
    newState.timeLeft = { minutes: minutes - 1, seconds: 59 }
  } else {
    newState.timeLeft = { minutes: minutes, seconds: seconds - 1 }
  }

  newState.progress = Number(
    (
      ((newState.timeLeft.minutes + newState.timeLeft.seconds / 60) / newState[`${newState.mainTimerLabel}Length`]) *
      100
    ).toFixed(2)
  )

  return newState
}

export const timerReducer = (state, action) => {
  switch (action.type) {
    case 'SESSION_INC':
      return controlLength(state, 'session', 'increment')
    case 'SESSION_DEC':
      return controlLength(state, 'session', 'decrement')
    case 'BREAK_INC':
      return controlLength(state, 'break', 'increment')
    case 'BREAK_DEC':
      return controlLength(state, 'break', 'decrement')
    case 'START_TIMER':
      return { ...state, active: true }
    case 'STOP_TIMER':
      return { ...state, active: false }
    case 'TICK':
      return tick(state)
    case 'RESET':
      clearInterval(window.timerID)
      beep.pause()
      beep.currentTime = 0
      return { ...initialState }
    default:
      return state
  }
}
