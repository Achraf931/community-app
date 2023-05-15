<script setup>
import { useAuthStore } from '@/stores/AuthStore'

definePageMeta({
    layout: 'sign',
    middleware: 'guest'
})
const router = useRouter(),
    store = useAuthStore(),
    { register } = useStrapiAuth(),
    jobs = ['Product Manager', 'Développeur Web', 'Web Designer', 'Data Scientist', 'DevOps', 'Product Owner', 'Scrum Master', 'Développeur Front', 'Développeur Back', 'Développeur Fullstack'],
    compagnies = ['Google', 'Facebook', 'Maiia', 'Franprix', 'Micromania', 'Tinder', 'Useradgents', 'Insider', 'Apple'],
    descriptions = ['Passionné(e) par l\'art, toujours en quête d\'excellence',
        'Polyvalent(e) et adaptable, gestion de projets variés',
        'Créatif(ve) et rigoureux(se), je m\'adapte à tous les projets',
        'Passionné(e) par le développement web, je suis toujours à la recherche de nouveaux challenges',
        'Engagé(e) dans le développement continu des compétences',
        'Résistant(e) au stress, travail efficace sous pression',
        'Leadership naturel, inspiration et motivation d\'équipe',
        'Esprit créatif, solutions uniques aux défis professionnels'
        ],
    pending = ref(false),
    formError = ref(null),
    form = reactive({
        username: '',
        lastname: '',
        firstname: '',
        email: '',
        password: ''
    })
const handleRegister = async () => {
    if (form.lastname !== '' && form.firstname !== '' && form.email !== '' && form.password !== '') {
        pending.value = true
        try {
            const { jwt, user } = await register({
                username: form.username || form.email,
                lastname: form.lastname,
                firstname: form.firstname,
                email: form.email,
                password: form.password,
                avatar_url: 'https://picsum.photos/200',
                job: jobs[Math.floor(Math.random() * jobs.length)],
                company: compagnies[Math.floor(Math.random() * compagnies.length)],
                description: descriptions[Math.floor(Math.random() * descriptions.length)]
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
  <section class="flex-1 h-screen bg-custom-light-gray flex flex-col gap-5 items-center justify-center p-5">
    <form @submit.prevent="handleRegister" class="p-5 flex gap-2 flex-col bg-white shadow-sm rounded-3xl overflow-hidden">
      <h1 class="text-xl font-extrabold mb-5 text-center">Bienvenue dans <span class="text-custom-purple">Community</span>.</h1>
      <h1 class="font-semibold text-center mb-5">Une question ? Toutes les réponses se trouvent ici 👇</h1>
      <label for="firstname">
        <input v-model="form.firstname" id="firstname" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Prénom">
      </label>
        <label for="lastname">
            <input v-model="form.lastname" id="lastname" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="text" inputmode="text" placeholder="Nom">
        </label>
      <label for="email">
        <input v-model="form.email" id="email" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="email" inputmode="email" placeholder="E-mail">
      </label>
      <label for="password">
        <input v-model="form.password" id="password" class="font-medium w-full py-4 px-5 caret-custom-purple rounded-2xl border border-solid border-custom-light-gray focus:border-custom-purple bg-custom-light-gray outline-none" type="password" inputmode="text" placeholder="Mot de passe">
      </label>
      <button type="submit" :disabled="form.lastname === '' || form.firstname === '' || form.email === '' || form.password === ''" :class="form.lastname !== '' && form.firstname !== '' && form.email !== '' && form.password !== '' ? 'bg-custom-purple text-white' : 'bg-transparent text-light-gray'" class="w-full flex items-center justify-center gap-2 font-semibold mt-5 py-4 px-5 rounded-2xl border border-solid border-light-gray">
        <svg v-if="pending" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        M'inscrire
      </button>
        <p v-if="formError" class="text-sm text-center text-red-500 mt-2">{{ formError }}</p>
        <p class="text-sm text-center text-light-gray">Déjà inscrit ? <NuxtLink :to="{ name: 'login' }" class="text-custom-purple font-medium">Me connecter</NuxtLink></p>
    </form>
  </section>
</template>
