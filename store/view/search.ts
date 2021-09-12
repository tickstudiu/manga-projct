import { BookItem } from '@/types/book'

export default {
    state: () => ({
        isLoading: false,
        books: [] as BookItem[],
    }),

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_BOOKS(state: any, payload: BookItem[]) {
            state.books = payload
        },
    },

    actions: {
        async fetch(
            { commit }: any,
            { value, page = '1' }:
                { value?: string,  page?: string }
        ) {
            commit('SET_LOADING', true)

            try {
                const { app }: any = this

                const responseBooks = await app.$services.book.titleSearch({
                    value,
                    page: Number(page)
                })

                commit('SET_BOOKS', responseBooks)

                commit('SET_LOADING')
            } catch {
                // do something

                commit('SET_LOADING')
            }
        },
    },
}
