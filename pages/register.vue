<script setup>
definePageMeta({
    layout: 'sign'
})
const form = reactive({
        lastname: 'Doe',
        firstname: 'John',
        email: 'compte@test.fr',
        password: 'password'
    }),
    router = useRouter()

const register = () => {
    if (form.lastname !== '' && form.firstname !== '' && form.email !== '' && form.password !== '') {
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
  <section class="flex-1 h-screen bg-custom-light-gray flex flex-col gap-5 items-center justify-center p-5">
    <h1 class="text-xl font-extrabold dark:text-white">Bienvenue chez <span class="text-custom-purple">Community</span>.</h1>
    <form @submit.prevent="register" class="p-5 flex gap-2 flex-col bg-white shadow-sm rounded-3xl overflow-hidden">
      <h1 class="font-semibold text-xl text-center mb-5">Partage, entraide, conseils avec des milliers d'étudiants !</h1>
      <label for="lastname">
        <input v-model="form.lastname" id="lastname" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Nom">
      </label>
      <label for="firstname">
        <input v-model="form.firstname" id="firstname" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Prénom">
      </label>
      <label for="email">
        <input v-model="form.email" id="email" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="email" inputmode="email" placeholder="E-mail">
      </label>
      <label for="password">
        <input v-model="form.password" id="password" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="password" inputmode="text" placeholder="Mot de passe">
      </label>
      <button type="submit" :disabled="form.lastname === '' || form.firstname === '' || form.email === '' || form.password === ''" :class="form.lastname !== '' && form.firstname !== '' && form.email !== '' && form.password !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'" class="w-full font-medium mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">M'inscrire</button>
      <p class="text-sm text-center text-light-gray">Déjà inscrit ? <NuxtLink :to="{ name: 'login' }" class="text-custom-purple font-medium">Me connecter</NuxtLink></p>
    </form>
  </section>
</template>
