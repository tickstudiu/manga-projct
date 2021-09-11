import { pagination } from '@/config/pagination'

export default ($axios: any) => {
    return {
        all({ limit = pagination.limit }: { limit?: number }) {
            return $axios.$get(`/books?_limit=${limit}`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/books/${id}`)
        },
        allNew({ limit = pagination.limit, tagId = 1, categoryId = 1, statusId = 1 }: { limit?: number, tagId?: number, categoryId?: number, statusId?: number }) {
            return $axios.$get(`/books?isNew=true&_limit=${limit}&tags_like=${tagId}&categories_like=${categoryId}&status_like=${statusId}`)
        }
    }
}