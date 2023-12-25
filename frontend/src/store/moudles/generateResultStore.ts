import { defineStore } from 'pinia'

interface resultRec {
  datetime: number
  variable: string
}
export const useGenerateResultStore = defineStore({
  id: 'useGenerateResultStore',
  state: () => {
    return {
      current_result: [],
      result_list: [] as resultRec[]
    }
  },
  getters: {
    getCurrent: state => {
      return state.current_result
    },
    getResultList: state => {
      return state.result_list
    }
  },
  actions: {
    setCurrent(cur_res) {
      this.current_result = cur_res
    },
    updateList(result: resultRec) {
      this.result_list.unshift(result)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'useGenerateResultStore',
        storage: localStorage, // 或者使用 sessionStorage
        paths: ['result_list']
      }
    ]
  }
})
