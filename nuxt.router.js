import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home.vue'
import Search from '~/pages/Search.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:type/:value',
    name: 'Search',
    component: Search,
  },
]

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes,
  })
}
