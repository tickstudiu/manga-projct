import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home.vue'
import Search from '~/pages/Search.vue'
import Category from '~/pages/Category.vue'
import Book from '~/pages/Book.vue'
import Chapter from '~/pages/Chapter.vue'

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
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/book/:book_id',
    name: 'Book',
    component: Book,
  },
  {
    path: '/book/:book_id/:chapter_id',
    name: 'Chapter',
    component: Chapter,
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
