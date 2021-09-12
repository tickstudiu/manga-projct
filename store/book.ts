import { BookItem } from '@/types/book'

export default {
    state: () => ({
        isLoading: false,
        books: [] as BookItem[],
    }),

    getters: {
        getBook: (state: any) => (id: number) => {
            if (id) {
                return state.books.find((item: BookItem) => item.id === id)
            }

            return null
        },
    },

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_BOOKS(state: any, payload: BookItem[]) {
            state.books = payload
        },
    },

    actions: {
        async fetchInit({ commit }: any,) {
            try {
                const { app }: any = this
                const responseBooks = await app.$services.book.all({})

                commit('SET_BOOKS', responseBooks)
            } catch {
                // do something
            }
        },

        async fetch(
            { commit, state, dispatch }: any
        ) {
            commit('SET_LOADING', true)

            try {
                if (!state.books.length) {
                    await dispatch('fetchInit')
                }

                commit('SET_LOADING')
            } catch {
                // do something

                commit('SET_LOADING')
            }
        },
    },
}
