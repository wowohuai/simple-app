import { fromJS } from 'immutable'
import { types } from './'

const defaultState = fromJS({
  focused: false,
  searchItem: ['教育', '餐饮', 'vue','react','typescript','nginx','flutter'],
  searchHistory: ['react','redux', 'router']
})

export default (state = defaultState, action) => {
  if (action.type === types.SET_INPUT_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === types.SET_INPUT_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === types.DELETE_SEARCH_HISTORY) {
    const searchHistory = state.get('searchHistory').toJS()
    searchHistory.splice(action.index, 1)
    return state.set('searchHistory', fromJS(searchHistory))
  }
  return state
}