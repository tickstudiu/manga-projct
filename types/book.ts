export interface CoverItem {
    width: number
    height: number
    pageUrl: string
    alt?: string
}
export interface BookItem {
    id: number
    categories: number[]
    isNew: boolean
    tags: number[]
    cover: CoverItem
    authors: number[]
    title: string
    titleSlug: string
    status: number[]
    summary: string
}