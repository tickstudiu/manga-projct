export interface PageItem {
    id: number
    width: number
    height: number
    pageUrl: string
    alt?: string
}

export interface ChapterItem {
    id: number
    bookId: number
    countPage: number
    view: number
    status: string
    name: string
    pages: PageItem[]
}