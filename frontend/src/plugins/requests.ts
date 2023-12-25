import axiosInstance from './axios'

const get = (url: string, params?: object) => {
  return axiosInstance({
    url: url,
    method: 'GET',
    params: params
  })
}

export const post = (url: string, data?: object) => {
  return axiosInstance({
    url: url,
    method: 'POST',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const request = {
  post,
  get
}
