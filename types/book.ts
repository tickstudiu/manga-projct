export interface BookItem {
    id: number
    categoryId: number
    isNew: boolean
    tags: number[]
    authors: number[]
    title: string
    titleSlug: string
    status: string
    summary: string
}