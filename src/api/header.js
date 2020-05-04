import request from '@/utils/request'

/**
 * 获取推荐关键词
 */

 export const getSearchItem = () => {
   return request({
     method: 'GET',
     url: '/header.json'
   })
 }