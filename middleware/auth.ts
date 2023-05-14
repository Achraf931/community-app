export default defineNuxtRouteMiddleware(async () => {
    const user = useStrapiUser()
    console.log(user.value)
    if (!user.value) {
        const router = useRouter()
        return router.push('/onboarding')
    }
})
