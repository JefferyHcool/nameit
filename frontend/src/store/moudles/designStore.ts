import { defineStore } from 'pinia'
import type { GlobalTheme } from 'naive-ui'
export const useDesignStore = defineStore({
  id: 'designStore',
  state: () => {
    return {
      theme: 'light'
    }
  },
  getters: {
    getTheme: state => {
      return state.theme
    }
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    }
  }
})
