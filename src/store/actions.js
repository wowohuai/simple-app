import {
  SET_INPUT_FOCUS
} from './action-types'

export const setInputFocus = (focused) => ({
  type: SET_INPUT_FOCUS,
  focused
})