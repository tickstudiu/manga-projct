import { BookItem } from '@/types/book'
import { StatusItem } from '@/types/status'
import { TagItem } from '@/types/tag'
import { CategoryItem } from '@/types/category'

export default {
    state: () => ({
        isLoading: false,
        books: [] as BookItem[],
        status: [] as StatusItem[],
        tags: [] as TagItem[],
        categories: [] as CategoryItem[],
    }),

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_BOOKS(state: any, payload: BookItem[]) {
            state.books = payload
        },
        SET_STATUS(state: any, payload: BookItem[]) {
            state.status = payload
        },
        SET_TAGS(state: any, payload: BookItem[]) {
            state.tags = payload
        },
        SET_CATEGORIES(state: any, payload: BookItem[]) {
            state.categories = payload
        },
    },

    actions: {
        async fetch({ commit }: any) {
            commit('SET_LOADING', true)
            try {
                const { app }: any = this
                const responseBooks = await app.$services.book.allNew({})
                const responseStatus = await app.$services.status.all({})
                const responseTags = await app.$services.tag.all({})
                const responseCategories = await app.$services.category.all({})

                commit('SET_BOOKS', responseBooks)
                commit('SET_STATUS', responseStatus)
                commit('SET_TAGS', responseTags)
                commit('SET_CATEGORIES', responseCategories)

                commit('SET_LOADING')
            } catch {
                // do something

                commit('SET_LOADING')
            }
        },
    },
}
