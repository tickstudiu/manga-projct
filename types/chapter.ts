export interface PageItem {
    id: number
    width: number
    height: number
    pageUrl: string
}

export interface ChapterItem {
    id: number
    projectId: number
    countPage: number
    view: number
    status: string
    name: string
    pages: PageItem[]
}