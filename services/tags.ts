export default ($axios: any) => {
    return {
        all() {
            return $axios.$get(`/tags`)
        },
        byId({id}: {id: string}) {
            return $axios.$get(`/tags/${id}`)
        },
    }
}
