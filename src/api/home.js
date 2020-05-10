import request from '@/utils/request'


export const _getHomeData = () => {
  return request({
    method: 'GET',
    url: '/home.json'
  })
}

export const _getList = (params) => {
  return request({
    method: 'GET',
    url: '/homeList.json',
    params
  })
}