import { types }from './'

export const setInputFocus = () => ({
  type: types.SET_INPUT_FOCUS
})

export const setInputBlur = () => ({
  type: types.SET_INPUT_BLUR
})

export const deleteSearchHistoty = (index) => ({
  type: types.DELETE_SEARCH_HISTORY,
  index
})