import { Router } from 'vue-router'

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, _, next) => {
    // http://localhost:3000/#/chart/preview/792622755697790976?t=123
    // 把外部动态参数放入window.route.params，后续API动态接口可以用window.route?.params?.t来拼接参数
    // @ts-ignore
    if (!window.route) window.route = { params: {} }
    // @ts-ignore
    Object.assign(window.route.params, to.query)

    next()
  })

  router.afterEach((to, _) => {
    document.title = (to?.meta?.title as string) || document.title
  })

  // 错误
  router.onError(error => {
    console.log(error, '路由错误')
  })
}
