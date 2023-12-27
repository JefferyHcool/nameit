interface Window {
  $loading: any
  $message: any
  $dialog: any
  // 语言
  $t: any
  $vue: any
}
declare module '*.svg' {
  const content: string
  export default content
}
declare module 'typeit' {
  const TypeIt: any
  export = TypeIt
}

interface GeneratorData {
  variable: string | null // 变量的中文名称或描述
  language?: string | null // 变量使用的编程语言
  style?: Array<string> | null // 变量名称的风格
  type?: string | null // 变量的类型 如：函数、常量、类型、变量、命名空间、枚举、宏、类、接口
  prefix?: string | null // 变量的前缀
  suffix?: string | null // 后缀
  length?: number | null // 变量名的长度 不得超过这个长度
  mount?: number // 生成的数量 默认4
}

declare type RESPONSE = {
  code: number
  data: object
  mesg: string
}
