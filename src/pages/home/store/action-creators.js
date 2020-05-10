import { types }from './'
import { _getHomeData, _getList } from '@/api/home'

const setHomeData = data => ({
  type: types.SET_HOME_DATA,
  data
})

const addList = ({data, page}) => ({
  type: types.ADD_LIST_DATA,
  data,
  page: ++page
})

export const getHomeData = () => {
  return async (dispatch) => {
    const res = await _getHomeData();
    const { data } = res
    dispatch(setHomeData(data))
  }
}


export const getList = (page) => {
  return async (dispatch) => {
    const res = await _getList({
      page
    });
    const { data } = res
    dispatch(addList({
      data,
      page
    }))
  }
}


export const setBackTitle = (show) => ({
  type: types.SET_BACK_TITLE,
  show
})

export const setBackTop = (show) => ({
  type: types.SET_BACK_TOP,
  show
})