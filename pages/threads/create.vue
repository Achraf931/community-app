<script setup>
import { useAuthStore } from '@/stores/AuthStore'

definePageMeta({
    layout: 'threads',
    middleware: 'auth'
})

const router = useRouter(),
    { create, update } = useStrapi(),
    store = useAuthStore(),
    pending = ref(false),
    formError = ref(null),
    form = reactive({
        title: '',
        description: ''
    })

const onSubmit = async () => {
    pending.value = true
    try {
        const { data } = await create('threads', {
            title: form.title,
            description: form.description,
            author: store.getUser.id
        })
        if (data) await router.push({ name: 'threads-id', params: { id: data.id } })
    } catch (error) {
        console.log(error)
        formError.value = error
    } finally {
        pending.value = false
    }
}
</script>
<template>
    <section class="flex-1 p-5 flex items-center justify-center">
        <form @submit.prevent="onSubmit" class="p-5 flex gap-2 flex-col bg-white shadow-sm rounded-3xl overflow-hidden">
            <NuxtLink to="/" class="text-xl font-extrabold mb-5 text-center">Création<span class="text-custom-purple">.</span></NuxtLink>
            <h1 class="font-semibold text-center">Ne t'inquiète pas, tu aura rapidement une réponse 😉</h1>
            <label for="title">
                <input v-model="form.title" id="title" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Titre">
            </label>
            <label for="description">
                <textarea v-model="form.description" id="description" rows="5" class="resize-none font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Description"></textarea>
            </label>
            <small v-if="false" class="block text-custom-purple text-sm text-center">Mot de passe oublié ?</small>
            <button type="submit" :disabled="form.title === '' || form.description === ''" :class="form.title !== '' && form.description !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'" class="w-full flex items-center justify-center gap-2 font-semibold mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">
                <svg v-if="pending" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Poser ma question
            </button>
            <p v-if="formError" class="text-sm text-center text-red-500 mt-2">{{ formError }}</p>
        </form>
    </section>
</template>
