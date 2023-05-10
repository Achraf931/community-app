<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
definePageMeta({
    layout: 'sign'
})
const loading = ref(false)
const form = reactive({
    email: '',
    password: ''
})
const handleLogin = async () => {
    if (form.email !== '' && form.password !== '') {
        try {
            loading.value = true
            const { error, data } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password })
            user.value = data.user
            console.log(data)
            if (error) throw error
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            loading.value = false
            console.log(user.value)
            await navigateTo('/', { redirectCode: 301 })
        }
    }
}

onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/', { redirectCode: 301 })
        }
    })
})
</script>
<template>
    <section class="flex-1 flex flex-col gap-5 items-center justify-center p-5">
        <form @submit.prevent="handleLogin" class="p-5 flex gap-2 flex-col bg-white shadow-sm rounded-3xl overflow-hidden">
            <NuxtLink to="/" class="text-xl font-extrabold mb-5 text-center">Community<span class="text-custom-purple">.</span></NuxtLink>
            <h1 class="font-semibold text-center">On se disait bien qu'on vous avait déjà vu 😉</h1>
            <label for="email">
                <input v-model="form.email" id="email" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="email" inputmode="email" placeholder="E-mail">
            </label>
            <label for="password">
                <input v-model="form.password" id="password" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="password" inputmode="text" placeholder="Mot de passe">
                <small class="block mt-2 text-custom-purple text-sm text-center">Mot de passe oublié ?</small>
            </label>
            <button type="submit" :disabled="form.email === '' || form.password === ''" :class="form.email !== '' && form.password !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'" class="w-full flex items-center justify-center gap-2 font-medium mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">
                <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Me connecter
            </button>
        </form>

        <div class="bg-white p-5 flex flex-col items-center justify-start w-full rounded-3xl shadow-sm">
            <h1 class="font-semibold text-center">Pas encore de compte ?</h1>
            <p class="text-center mt-2 text-sm">Rejoins le plus grand réseau d'étudiants,<br />penser et gérer par des étudiants</p>
            <NuxtLink :to="{ name: 'register' }" class="w-full bg-custom-purple text-white text-center font-medium mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">M'inscrire</NuxtLink>
        </div>
    </section>
</template>
