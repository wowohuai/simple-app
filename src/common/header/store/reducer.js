import {
  SET_INPUT_FOCUS
} from '../../../store/action-types'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === SET_INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = action.focused
    return newState
  }
  return state
}