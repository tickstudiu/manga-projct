import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home.vue'
import Search from '~/pages/Search.vue'
import BookDetail from '~/pages/Book/BookDetail.vue'
import BookList from '~/pages/Book/BookList.vue'
import ChapterDetail from '~/pages/Chapter/ChapterDetail.vue'

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
    path: '/books',
    name: 'Books',
    component: BookList,
  },
  {
    path: '/books/:book_id',
    name: 'BooksDetail',
    component: BookDetail,
  },
  {
    path: '/books/:book_id/:chapter_id',
    name: 'ChaptersDetail',
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
