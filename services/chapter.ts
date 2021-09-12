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
            return $axios.$get(`/chapters?_page=${page}_limit=${limit}`)
        },
        allBook({
            bookId,
            limit = pagination.limit,
            page = 1
        }: {
            bookId: number,
            limit?: number,
            page?: number
        }) {
            return $axios.$get(`/chapters?bookId=${bookId}&_page=${page}_limit=${limit}`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/chapters/${id}`)
        },
        last({ limit = pagination.limit }: { limit?: number }) {
            return $axios.$get(`/chapters?_sort=id&_order=desc&_limit=${limit}`)
        }
    }
}