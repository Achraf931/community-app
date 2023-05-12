export default defineNuxtRouteMiddleware(async () => {
    const user = useStrapiUser()
    if (!user.value) {
        const router = useRouter()
        return router.push('/login')
    }
})
