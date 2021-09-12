import { CategoryItem } from '@/types/category'

export default {
    state: () => ({
        isLoading: false,
        categories: [] as CategoryItem[],
    }),

    getters: {
        getCategory: (state: any) => (id: number) => {
            if (id) {
                return state.categories.find((item: CategoryItem) => item.id === id)
            }

            return null
        },
    },

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_CATEGORIES(state: any, payload: CategoryItem[]) {
            state.categories = payload
        },
    },

    actions: {
        async fetchInit({ commit }: any,) {
            try {
                const { app }: any = this
                const responseCategories = await app.$services.category.all({})

                commit('SET_CATEGORIES', responseCategories)
            } catch {
                // do something
            }
        },

        async fetch(
            { commit, state, dispatch }: any
        ) {
            commit('SET_LOADING', true)

            try {
                if (!state.categories.length) {
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
