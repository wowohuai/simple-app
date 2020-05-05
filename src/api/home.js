import request from '@/utils/request'


export const _getTopicList = () => {
  return request({
    method: 'GET',
    url: '/home/topic.json'
  })
}