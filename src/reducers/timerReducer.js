export const initialState = {
  sessionLength: 25,
  breakLength: 5,
  mainTimerLabel: 'session',
  active: false,
  timeLeft: {
    minutes: 25,
    seconds: 0
  }
}

const controlLength = (state, label, operation) => {
  let toModify = `${label}Length`

  if (!state.active) {
    if (operation === 'increment' && state[toModify] < 60) {
      if (label === 'session') {
        return {
          ...state,
          [toModify]: state[toModify] + 1,
          timeLeft: { ...state.timeLeft, minutes: state.sessionLength + 1 }
        }
      }
      return { ...state, [toModify]: state[toModify] + 1 }
    } else if (operation === 'decrement' && state[toModify] > 1) {
      if (label === 'session') {
        return {
          ...state,
          [toModify]: state[toModify] - 1,
          timeLeft: { ...state.timeLeft, minutes: state.sessionLength - 1 }
        }
      }
      return { ...state, [toModify]: state[toModify] - 1 }
    }
  }

  return state
}

const tick = state => {
  const { minutes, seconds } = state.timeLeft

  if (minutes === 0 && seconds === 0) {
    if (state.mainTimerLabel === 'session') {
      // START BREAK TIMER
      return { ...state, mainTimerLabel: 'break', timeLeft: { minutes: state.breakLength, seconds: 0 } }
    } else {
      return { ...initialState }
    }
  } else if (seconds === 0) {
    return { ...state, timeLeft: { minutes: minutes - 1, seconds: 59 } }
  } else {
    return { ...state, timeLeft: { minutes: minutes, seconds: seconds - 1 } }
  }
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
      return { ...initialState }
    default:
      return state
  }
}
