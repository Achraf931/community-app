<script setup>
definePageMeta({
    layout: 'sign'
})
const form = reactive({
    email: 'compte@test.fr',
    password: 'password'
}),
    router = useRouter()

const login = () => {
    if (form.email !== '' && form.password !== '') {
        router.push('/')
        /*$auth.loginWith('local', {
            data: {
                email: form.email,
                password: form.password
            }
        }).then(() => {
            $router.push('/')
        }).catch((error) => {
            console.log(error)
        })*/
    }
}
</script>
<template>
    <section class="flex-1 flex flex-col gap-5 items-center justify-center p-5">
        <form @submit.prevent="login" class="p-5 pt-0 flex gap-2 flex-col bg-white shadow-sm rounded-3xl overflow-hidden">
            <video class="w-10/12 mx-auto" src="/lottie/134013-student-with-laptop.mp4" loop autoplay muted playsinline></video>

            <label for="email">
                <input v-model="form.email" id="email" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="email" inputmode="email" placeholder="E-mail">
            </label>
            <label for="password">
                <input v-model="form.password" id="password" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="password" inputmode="text" placeholder="Mot de passe">
                <small class="block mt-2 text-custom-purple text-sm text-center">Mot de passe oublié ?</small>
            </label>
            <button type="submit" :disabled="form.email === '' || form.password === ''" :class="form.email !== '' && form.password !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'" class="w-full font-medium mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">Me connecter</button>
            <p class="text-sm text-center text-light-gray">Pas encore de compte ? <NuxtLink :to="{ name: 'register' }" class="text-custom-purple font-medium">M'inscrire</NuxtLink></p>
        </form>
    </section>
</template>
