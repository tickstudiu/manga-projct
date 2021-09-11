import { pagination } from '@/config/pagination'

export default ($axios: any) => {
    return {
        all({ limit = pagination.limit }: { limit?: number }) {
            return $axios.$get(`/chapters?_limit=${limit}`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/chapters/${id}`)
        },
        last({ limit = pagination.limit }: { limit?: number }) {
            return $axios.$get(`/chapters?_sort=id&_order=desc&_limit=${limit}`)
        }
    }
}