import { fromJS } from 'immutable'
import { types } from './'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1,
  recommendList: [],
  showBackTitle: false,
  showBack: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_HOME_DATA:
      const { topicList, articleList, recommendList} = action.data
      return state.merge(fromJS({
        topicList,
        articleList,
        recommendList
      }))
    case types.ADD_LIST_DATA:
      const { data, page } = action
      return state.merge(fromJS({
        articleList: state.get('articleList').concat(fromJS(data)),
        articlePage: page
      }))
    case types.SET_BACK_TITLE:
      return state.set('showBackTitle', action.show)
    case types.SET_BACK_TOP:
      return state.set('showBack', action.show)
    default:
      return state
  }
}