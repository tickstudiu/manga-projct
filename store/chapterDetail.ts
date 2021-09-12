import { BookItem } from '@/types/book'
import { ChapterItem } from '@/types/chapter'

export default {
    state: () => ({
        isError: false,
        isLoading: false,
        book: {} as BookItem,
        chapter: {} as ChapterItem,
    }),

    mutations: {
        SET_ERROR(state: any, payload: boolean = true) {
            state.isError = payload
        },
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_CHAPTER(state: any, payload: ChapterItem) {
            state.chapter = payload
        },
        SET_BOOK(state: any, payload: BookItem) {
            state.book = payload
        },
    },

    actions: {
        async fetch(
            { commit }: any,
            { bookId, chapterId }: { bookId?: string, chapterId?: string }
        ) {
            commit('SET_LOADING', true)

            try {
                const { app }: any = this
                const responseBook = await app.$services.book.byId({
                    id: Number(bookId)
                })

                const responseChapter = await app.$services.chapter.byId({
                    id: Number(chapterId)
                })

                commit('SET_CHAPTER', responseChapter)
                commit('SET_BOOK', responseBook)

                commit('SET_LOADING')
            } catch {
                // do something   
                commit('SET_ERROR')

                commit('SET_LOADING')
            }
        },
    },
}
