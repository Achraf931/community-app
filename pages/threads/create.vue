<script setup>
import { useAuthStore } from '@/stores/AuthStore'

definePageMeta({
  layout: 'create',
  middleware: 'auth'
})

useHead({
  meta: [{
    name: 'theme-color',
    content: '#5E4AE3'
  }]
})

const { create } = useStrapi(),
    store = useAuthStore(),
    pending = ref(false),
    formError = ref(null),
    content = ref('')

const onSubmit = async () => {
  pending.value = true
  try {
    const { data } = await useApi(`threads?${
        useQueryString({
          sort: { createdAt: 'desc' },
          populate: { likes: { populate: '*' }, answers: { count: true }, author: true }
        })
    }`, { method: 'POST', body: {
        data: {
          content: content.value,
          author: store.getUser.id
        }
      } }).then(({ data }) => data.value)
    if (data) await navigateTo({ name: 'threads-id', params: { id: data.id } })
  } catch (error) {
    formError.value = error
  } finally {
    pending.value = false
  }
}
</script>
<template>
  <section class="flex-1 flex flex-col gap-5 bg-custom-purple justify-between">
    <div class="p-5 pb-0 text-white">
      <NuxtLink to="/" class="font-black text-2xl">Studup</NuxtLink>
      <p class="text-sm mt-2">Le plus grand réseau d'étudiants,<br />pensé et géré par des étudiants</p>
    </div>
    <form @submit.prevent="onSubmit" class="p-5 flex gap-2 flex-col bg-white overflow-hidden rounded-t-3xl">
      <div class="mb-5">
        <h1 class="text-xl font-extrabold mb-5 text-center text-custom-purple">Pose ta question ici 👇</h1>
        <h2 class="font-medium text-light-gray text-center text-sm">Ne t'inquiète pas,<br />tu aura rapidement une réponse 😉</h2>
      </div>
      <label for="content">
        <textarea v-model="content" id="content" rows="5"
                  class="resize-none text-sm font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none"
                  type="text" inputmode="text" placeholder="Question"></textarea>
      </label>
      <small v-if="false" class="block text-custom-purple text-sm text-center">Mot de passe oublié ?</small>
      <button type="submit" :disabled="content === ''"
              :class="content !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'"
              class="w-full flex items-center justify-center gap-2 font-bold text-sm mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">
        <svg v-if="pending" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Poser ma question
      </button>
      <p v-if="formError" class="text-sm text-center text-red-500 mt-2">{{ formError }}</p>
    </form>
  </section>
</template>
