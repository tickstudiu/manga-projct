export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/status`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/status/${id}`)
        },
    }
}