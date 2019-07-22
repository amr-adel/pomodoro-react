export const timerReducer = (state, action) => {
  switch (action.type) {
    case 'SESSION_INC':
      return { ...state, sessionLength: state.sessionLength + 1 }
    case 'SESSION_DEC':
      return { ...state, sessionLength: state.sessionLength - 1 }
    default:
      return state
  }
}
