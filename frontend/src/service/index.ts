import { GeneratorData } from 'types/globals'
import { request } from '@/plugins/requests.ts'
import { ApiEnum } from '@/const/enums.ts'
export const generate_variable = (data: GeneratorData) => {
  return request
    .post(ApiEnum.GENERATE_VARIABLE, data)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}
