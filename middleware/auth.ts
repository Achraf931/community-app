export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useSupabaseUser()
    const router = useRouter()
    if (!user) {
        return router.push('/login')
    }
})
