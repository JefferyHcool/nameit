import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios'
import { ErrorEnum, ResultEnum } from '@/const/enums.ts'

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_DEV_PATH : import.meta.env.VITE_PRO_PATH,
  timeout: 60000
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // console.log(sessionStorage.getItem('token'))

    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code, mesg } = res.data as { code: number; mesg: string }
    if (code === undefined || code === null) return Promise.resolve(res.data)
    if (code === ResultEnum.DATA_SUCCESS) {
      mesg ? window['$message'].success(mesg) : ''
      return Promise.resolve(res.data)
    }

    mesg ? window['$message'].error(mesg) : ''
    return Promise.resolve(res.data)

    // 重定向
    // if (ErrorPageNameMap.get(code)) redirectErrorPage(code)
  },
  (error: AxiosError) => {
    const status = error.response?.status
    let message = ErrorEnum.UnknownError // 默认错误信息

    // eslint-disable-next-line default-case
    switch (status) {
      case 200:
        // 成功的处理逻辑
        break
      case 400:
        message = ErrorEnum.BadRequest
        break
      case 401:
      case 422:
        message = ErrorEnum.Unauthorized
        localStorage.removeItem('token')
        location.replace('/login')
        break
      case 403:
        message = ErrorEnum.Forbidden
        break
      case 404:
        message = ErrorEnum.NotFound
        break
      case 409:
        message = ErrorEnum.Conflict
        break
      case 429:
        message = ErrorEnum.TooManyRequests
        break
      case 500:
        message = ErrorEnum.InternalServerError
        break
      case 502:
        message = ErrorEnum.BadGateway
        break
      case 503:
        message = ErrorEnum.ServiceUnavailable
        break
      case 504:
        message = ErrorEnum.GatewayTimeout
        break
      default:
        message = ErrorEnum.UnknownError
        break
    }

    window['$message'].error(message)
    return Promise.reject(error)
  }
)

export default axiosInstance
