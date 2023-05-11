export default defineNuxtRouteMiddleware(async () => {
    const supabase = useSupabaseClient()
    const { session } = (await supabase.auth.getSession()).data
    if (session) {
        const router = useRouter()
        return router.push('/')
    }
})
