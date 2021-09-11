import { BookItem } from '@/types/book'
import { ChapterItem } from '@/types/chapter'

export default {
    state: () => ({
        isLoading: false,
        chapters: [] as ChapterItem[],
        books: [] as BookItem[],
    }),

    mutations: {
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_CHAPTERS(state: any, payload: ChapterItem[]){
            state.chapters = payload
        },
        SET_BOOKS(state: any, payload: BookItem[]) {
            state.books = payload
        },
    },

    actions: {
        async fetch({ commit }: any) {
            commit('SET_LOADING', true)
            try {
                const { app }: any = this
                const responseChapters = await app.$services.chapter.all()
                const responseBooks = await app.$services.book.all()

                commit('SET_CHAPTERS', responseChapters)
                commit('SET_BOOKS', responseBooks)

                commit('SET_LOADING')
            } catch {
                // do something

                commit('SET_LOADING')
            }
        },
    },
}
