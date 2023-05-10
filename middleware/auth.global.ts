export default defineNuxtRouteMiddleware(async (to, from) => {
    const router = useRouter()
    const supabase = useSupabaseClient()
    let { data } = await supabase.auth.getSession()
    if (!data?.session) {
        const { data, error } = await supabase.auth.refreshSession()
        let { user } = data
        if (!user && to.path !== '/login' && to.path !== '/register') {
            return router.push('/login')
        } else if (user && (to.path === '/login' || to.path === '/register')) {
            return router.push('/')
        }
    } else {
        if (!data?.session?.user && to.path !== '/login' && to.path !== '/register') {
            return router.push('/login')
        } else if (data?.session?.user && (to.path === '/login' || to.path === '/register')) {
            return router.push('/')
        }
    }
})
