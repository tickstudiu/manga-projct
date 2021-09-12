import { TagItem } from '@/types/tag'

export default {
    state: () => ({
        isLoading: false,
        tags: [] as TagItem[],
    }),

    getters: {
        getTag: (state: any) => (id: number) => {            
            if (id) {
                return state.tags.find((item: TagItem) => item.id === id)
            }

            return null
        },
    },

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_TAGS(state: any, payload: TagItem[]) {
            state.tags = payload
        },
    },

    actions: {
        async fetchInit({ commit }: any,) {
            try {
                const { app }: any = this
                const responseTags = await app.$services.tag.all({})

                commit('SET_TAGS', responseTags)
            } catch {
                // do something
            }
        },

        async fetch(
            { commit, state, dispatch }: any
        ) {
            commit('SET_LOADING', true)

            try {
                if (!state.tags.length) {
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
