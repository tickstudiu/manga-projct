export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/authors`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/authors/${id}`)
        },
    }
}