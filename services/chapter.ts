export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/chapters`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/chapters/${id}`)
        },
        last() {
            return $axios.$get(`/chapters?_sort=id&_order=desc`)
        }
    }
}