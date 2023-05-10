export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
    if (!user.value && (to.name !== 'login' && to.name !== 'register')) return navigateTo({ name: 'login' })
    else if (user.value && (to.name === 'login' || to.name === 'register')) navigateTo('/')
})
