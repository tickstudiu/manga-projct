export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/chapters`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/chapters/${id}`)
        },
    }
}