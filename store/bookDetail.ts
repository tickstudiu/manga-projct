import { BookItem } from '@/types/book'
import { ChapterItem } from '@/types/chapter'

export default {
    state: () => ({
        isError: false,
        isLoading: false,
        books: {} as BookItem,
        chapters: [] as ChapterItem[],
    }),

    mutations: {
        SET_ERROR(state: any, payload: boolean = true) {
            state.isError = payload
        },
        SET_LOADING(state: any, payload: boolean = false) {
            state.isLoading = payload
        },
        SET_CHAPTERS(state: any, payload: ChapterItem[]) {
            state.chapters = payload
        },
        SET_BOOK(state: any, payload: BookItem) {
            state.book = payload
        },
    },

    actions: {
        async fetch(
            { commit }: any,
            { id, page = '1' }: { id?: string, page?:string }
        ) {
            commit('SET_LOADING', true)

            try {
                const { app }: any = this

                const responseChapters = await app.$services.chapter.allBook({
                    bookId: id,
                    page: Number(page)
                })
                const responseBook = await app.$services.book.byId({
                    id: Number(id)
                })

                commit('SET_CHAPTERS', responseChapters)
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
