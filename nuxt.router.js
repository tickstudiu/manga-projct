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
    name: 'Categories',
    component: Category,
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
    path: '/chapters',
    name: 'Chapters',
    component: ChapterList,
  },
  {
    path: '/chapters/:chapter_id',
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
