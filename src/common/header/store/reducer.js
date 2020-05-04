import { fromJS } from 'immutable'
import { types } from './'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  page: 0,
  totalPage: 0,
  searchItem: [],
  searchHistory: ['react','redux', 'router']
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_INPUT_FOCUS:
      return state.set('focused', true)
    case types.SET_INPUT_BLUR:
      return state.set('focused', false)
    case types.DELETE_SEARCH_HISTORY:
      const searchHistory = state.get('searchHistory').toJS()
      searchHistory.splice(action.index, 1)
      return state.set('searchHistory', fromJS(searchHistory))
    case types.CHANGE_SEARCH_ITEM:
      const { data } = action
      const searchItem = fromJS(data)
      const totalPage = Math.ceil(data.length / 10)
      return state.merge({
        searchItem,
        totalPage
      })
    case types.SET_MOUSE_STATE:
      return state.set('mouseIn', fromJS(action.mouseIn))
    case types.SET_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}