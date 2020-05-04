import { types }from './'
import { getSearchItem as _getSearchItem } from '@/api/header'

const changeSearchItem = (data) => ({
  type: types.CHANGE_SEARCH_ITEM,
  data
})


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

export const handleMouseMove = (mouseIn) => ({
  type: types.SET_MOUSE_STATE,
  mouseIn
})
export const changePage = (page) => ({
  type: types.SET_PAGE,
  page
})

export const getSearchItem = () => {
  return async (dispatch) => {
    const { data } = await _getSearchItem()
    dispatch(changeSearchItem(data))
  }
}