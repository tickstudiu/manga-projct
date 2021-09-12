import { AuthorItem } from '@/types/author'

export default {
    state: () => ({
        isLoading: false,
        authors: [] as AuthorItem[],
    }),

    getters: {
        getAuthor: (state: any) => (id: number) => {
            if (id) {
                return state.authors.find((item: AuthorItem) => item.id === id)
            }

            return null
        },
    },

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_AUTHORS(state: any, payload: AuthorItem[]) {
            state.authors = payload
        },
    },

    actions: {
        async fetchInit({ commit }: any,) {
            try {
                const { app }: any = this
                const responseAuthors = await app.$services.author.all({})

                commit('SET_AUTHORS', responseAuthors)
            } catch {
                // do something
            }
        },

        async fetch(
            { commit, state, dispatch }: any
        ) {
            commit('SET_LOADING', true)

            try {
                if (!state.authors.length) {
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
