import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:9000/mock',
  timeout: 5000
})


service.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})



service.interceptors.response.use(response => {
  const res = response.data
  if(res.code === 0) {
    return res
  }
  return Promise.reject('code码错误')
}, err => {
  console.log(err)
  return Promise.reject(err)
})

export default service