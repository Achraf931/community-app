export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
    // @ts-ignore
    if (!user.value && to.path !== '/login' && to.path !== '/register') {
        return navigateTo('/login',{ redirectCode: 301 })
    } else if (user.value && (to.path === '/login' || to.path === '/register')) {
        return navigateTo('/',{ redirectCode: 301 })
    }
})
