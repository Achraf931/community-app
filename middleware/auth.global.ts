export default defineNuxtRouteMiddleware((to) => {
    const supabase = useSupabaseClient()
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(session, event)
        if (session && session.user) {
            console.log(session.user)
            if (!session.user && to.path !== '/login' && to.path !== '/register') {
                return navigateTo('/login',{ redirectCode: 301 })
            } else if (session.user && (to.path === '/login' || to.path === '/register')) {
                return navigateTo('/',{ redirectCode: 301 })
            }
        }
    })
})
