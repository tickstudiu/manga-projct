import { StatusItem } from '@/types/status'

export default {
    state: () => ({
        isLoading: false,
        status: [] as StatusItem[],
    }),

    getters: {
        getStatus: (state: any) => (id: number) => {
            if (id) {
                return state.status.find((item: StatusItem) => item.id === id)
            }

            return null
        },
    },

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_STATUS(state: any, payload: StatusItem[]) {
            state.status = payload
        },
    },

    actions: {
        async fetchInit({ commit }: any,) {
            try {
                const { app }: any = this
                const responseStatus = await app.$services.status.all({})

                commit('SET_STATUS', responseStatus)
            } catch {
                // do something
            }
        },

        async fetch(
            { commit, state, dispatch }: any
        ) {
            commit('SET_LOADING', true)

            try {
                if (!state.status.length) {
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
