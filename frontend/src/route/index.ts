import type { App } from 'vue'
import { createRouterGuards } from './router-guards'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('@/views/homePage.vue'),
    meta: {
      title: '命了个名'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true
})
export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}
export default router
