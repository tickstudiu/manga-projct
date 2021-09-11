export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/categories`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/categories/${id}`)
        },
    }
}