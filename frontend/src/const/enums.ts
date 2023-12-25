export enum ApiEnum {
  GENERATE_VARIABLE = '/generate'
}
export enum ResultEnum {
  DATA_SUCCESS = 0
}
export enum ErrorEnum {
  ServerError = '服务器发生错误，请稍后再试',
  Unauthorized = '身份已过期，请重新登录',
  NotFound = '访问地址不存在',
  Forbidden = '无权访问该资源',
  BadGateway = '网关错误',
  ServiceUnavailable = '服务不可用',
  GatewayTimeout = '网关超时',
  Conflict = '资源冲突',
  BadRequest = '无效的请求',
  UnprocessableEntity = '请求无法处理',
  InternalServerError = '内部服务器错误',
  NotAcceptable = '不可接受的内容',
  RequestTimeout = '请求超时',
  MethodNotAllowed = '请求方法不允许',
  LengthRequired = '需要提供内容长度',
  UnsupportedMediaType = '不支持的媒体类型',
  UpgradeRequired = '需要升级协议',
  PreconditionFailed = '前提条件失败',
  TooManyRequests = '请求过于频繁',
  UnavailableForLegalReasons = '因法律原因不可用',
  UnknownError = '发生未知错误'
}
export enum LINK {
  GITHUB_LINK = 'https://github.com/JefferyHcool/nameit'
}
