export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter()
    const supabase = useSupabaseClient()
    supabase.auth.onAuthStateChange((event, session) => {
        if (!session?.user && to.path !== '/login' && to.path !== '/register') {
            return router.push('/login')
        } else if (session?.user && (to.path === '/login' || to.path === '/register')) {
            return router.push('/')
        }
    })
})
