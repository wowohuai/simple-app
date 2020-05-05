import { fromJS } from 'immutable'
import { types } from './'

const defaultState = fromJS({
  topicList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_TOPIC_LIST:
      return state.set('topicList', fromJS(action.list))
    default:
      return state
  }
}