export const initialState = {
  sessionLength: 25,
  breakLength: 5,
  mainTimerLabel: 'session',
  active: false,
  timer: false,
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

const startTick = state => {
  state.timer = setInterval(() => {
    console.log('TICK!')
  }, 1000)

  return {...state, active: true}
}

const stopTick = state => {
  clearInterval(state.timer)
  return {...state, active: false}
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
    case 'START_STOP':
      return !state.active ? startTick(state) : stopTick(state)
    case 'RESET':
      if (state.timer) clearInterval(state.timer)
      return initialState
    default:
      return state
  }
}
