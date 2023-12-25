import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5421',
        changeOrigin: true
      }
      // 可以在这里添加更多的代理规则
    }
  },
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      }
    ]
  },
  build: {
    rollupOptions: {
      // 其他 Rollup 选项
    },
    // 禁用类型检查
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1600
  }
})
