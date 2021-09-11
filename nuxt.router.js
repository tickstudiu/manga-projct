import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home.vue'
import Search from '~/pages/Search.vue'
import Category from '~/pages/Category.vue'
import BookDetail from '~/pages/Book/BookDetail.vue'
import BookList from '~/pages/Book/BookList.vue'
import ChapterDetail from '~/pages/Chapter/ChapterDetail.vue'
import ChapterList from '~/pages/Chapter/ChapterList.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/categories',
    name: 'Category',
    component: Category,
  },
  {
    path: '/books',
    name: 'Book',
    component: BookList,
  },
  {
    path: '/books/:book_id',
    name: 'Book',
    component: BookDetail,
  },
  {
    path: '/chapters',
    name: 'Chapter',
    component: ChapterList,
  },
  {
    path: '/chapters/:chapter_id',
    name: 'Chapter',
    component: ChapterDetail,
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
