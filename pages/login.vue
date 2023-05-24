<script setup>
import { useAuthStore } from '@/stores/AuthStore'

definePageMeta({
  layout: 'sign',
  middleware: 'guest'
})

useHead({
  meta: [{
    name: 'theme-color',
    content: '#5E4AE3'
  }]
})

const router = useRouter(),
    store = useAuthStore(),
    { login } = useStrapiAuth(),
    showPassword = ref(false),
    pending = ref(false),
    formError = ref(null),
    form = reactive({
      username: '',
      lastname: '',
      firstname: '',
      email: '',
      password: ''
    })

const handleLogin = async () => {
  if (form.email !== '' && form.password !== '') {
    pending.value = true
    try {
      const { jwt, user } = await login({
        identifier: form.email,
        password: form.password
      })
      if (user.value) {
        await store.setUser({ jwt, user: user.value })
        await router.push('/')
      }
    } catch ({ error }) {
      formError.value = error.message
    } finally {
      pending.value = false
    }
  }
}
</script>
<template>
  <section class="flex-1 flex flex-col gap-5 bg-custom-purple justify-between">
    <div class="p-5 pb-0 text-white">
      <h1 class="font-black text-2xl">Studup</h1>
      <p class="text-sm mt-2">Le plus grand réseau d'étudiants,<br/>pensé et géré par des étudiants</p>
    </div>
    <form @submit.prevent="handleLogin" class="p-5 flex gap-2 flex-col bg-white overflow-hidden rounded-t-3xl">
      <div class="mb-5">
        <h1 class="text-xl font-extrabold mb-5 text-center text-custom-purple">Re-bonjour 👋</h1>
        <h2 class="font-medium text-light-gray text-center text-sm">On se disait bien qu'on vous avait déjà vu 😉</h2>
      </div>
      <label for="email">
        <input v-model="form.email" id="email"
               class="font-medium text-sm w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none"
               type="email" inputmode="email" placeholder="E-mail">
      </label>
      <label class="relative" for="password">
        <input v-model="form.password" id="password"
               class="font-medium text-sm w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none"
               :type="showPassword ? 'text' : 'password'" inputmode="text" placeholder="Mot de passe">
        <template v-if="form.password !== ''">
          <svg v-if="!showPassword" @click="showPassword = true" class="absolute top-1/2 right-5 -translate-y-1/2 w-5 h-5 stroke-light-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <svg v-else @click="showPassword = false" class="absolute top-1/2 right-5 -translate-y-1/2 w-5 h-5 stroke-light-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        </template>
      </label>
      <p v-if="formError" class="text-xs text-center text-red-500">{{ formError }}</p>
      <small v-if="false" class="block text-light-gray text-xs text-end">Mot de passe oublié ?</small>
      <button type="submit" :disabled="form.email === '' || form.password === ''"
              :class="form.email !== '' && form.password !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'"
              class="w-full flex items-center justify-center gap-2 font-bold text-sm mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">
        <svg v-if="pending" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Me connecter
      </button>
      <div class="text-light-gray text-xs mt-3 text-center flex items-center justify-center gap-2">
        <div class="h-[0.5px] flex-1 bg-light-gray"></div>
        <div
            class="mx-auto rounded-2xl border-2 border-solid border-custom-light-gray bg-custom-light-gray flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
        </div>
        <div
            class="mx-auto rounded-2xl border-2 border-solid border-custom-light-gray bg-custom-light-gray flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="#8c9eff"
                  d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/>
          </svg>
        </div>
        <div class="h-[0.5px] flex-1 bg-light-gray"></div>
      </div>
      <small class="block text-light-gray my-5 text-xs text-center">Pas encore de compte ?
        <NuxtLink :to="{ name: 'register' }" class="font-semibold text-custom-purple">M'inscrire</NuxtLink>
      </small>
    </form>
  </section>
</template>
