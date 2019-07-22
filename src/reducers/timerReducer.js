const controlLength = (state, label, operation) => {
  let toModify = `${label}Length`

  if (!state.active) {
    if (operation === 'increment' && state[toModify] < 60) {
      return { ...state, [toModify]: state[toModify] + 1 }
    } else if (operation === 'decrement' && state[toModify] > 1) {
      return { ...state, [toModify]: state[toModify] - 1 }
    }
  }

  return state
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
    default:
      return state
  }
}
