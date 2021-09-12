import { pagination } from '@/config/pagination'

export default ($axios: any) => {
    return {
        all({ 
            limit = pagination.limit,
            page = 1
        }: { 
            limit?: number,
            page?: number
        }) {
            return $axios.$get(`/books?_page=${page}_limit=${limit}`)
        },
        titleSearch({
            limit = pagination.limit,
            page = 1,
            value
        }: {
            limit?: number,
            page?: number,
            value: string
        }) {
            return $axios.$get(`/books?_page=${page}_limit=${limit}&title_like=${value}`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/books/${id}`)
        },
        allNew({ 
            limit = pagination.limit, 
            tagId = 1, 
            categoryId = 1, 
            statusId = 1,
            page = 1
        }: { 
            limit?: number, 
            tagId?: number, 
            categoryId?: number, 
            statusId?: number,
            page?:number
        }) {
            return $axios.$get(`/books?isNew=true&_page=${page}&_limit=${limit}&tags_like=${tagId}&categories_like=${categoryId}&status_like=${statusId}`)
        }
    }
}