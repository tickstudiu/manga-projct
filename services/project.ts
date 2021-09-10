export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/projects`)
        },
        byId({ id }: { id: string }) {
            return $axios.$get(`/projects/${id}`)
        },
    }
}