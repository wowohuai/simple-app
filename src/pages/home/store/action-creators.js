import { types }from './'
import { _getTopicList } from '@/api/home'

const setTopicList = list => ({
  type: types.SET_TOPIC_LIST,
  list
})

export const getTopicList = () => {
  return async (dispatch) => {
    const res = await _getTopicList();
    const { data } = res
    dispatch(setTopicList(data))
  }
}