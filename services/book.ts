export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/books`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/books/${id}`)
        },
    }
}