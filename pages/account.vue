<script setup>
import { useAuthStore } from '@/stores/AuthStore'

definePageMeta({
    layout: 'account',
    middleware: 'auth'
})

const store = useAuthStore(),
    router = useRouter(),
    { logout } = useStrapiAuth(),
    user = store.getUser

const handleLogout = async () => {
    try {
        await logout()
    } catch (error) {
        console.log(error)
    } finally {
        await router.push('/login')
        store.$reset()
    }
}
</script>
<template>
  <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
    <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
      <div class="flex items-center justify-between w-full gap-3">
        <div class="flex items-center justify-start gap-3">
          <img v-if="user.avatar_url" class="w-10 h-10 p-0.5 mx-auto rounded-full object-cover border border-solid border-custom-purple"
               :src="user.avatar_url"
               alt="Photo de profil">
          <div>
            <p class="font-bold text-xl">{{ user.lastname }} {{ user.firstname }}</p>
            <p v-if="user.job" class="text-xs text-light-gray">{{ user.job }} <span
              v-if="user.company">chez {{ user.company }}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <section class="flex flex-col justify-between items-start gap-5 flex-1 p-5">
      <div>
        <p v-if="user.description" class="mb-3 font-medium text-sm">{{ user.description }}</p>
        <div class="flex items-center justify-between gap-2">
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">56 followers</div>
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">536 following</div>
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">21 questions</div>
        </div>
      </div>

      <div class="w-full">
        <h2 class="font-semibold text-xl mb-3">Membre de :</h2>
        <div class="flex items-center justify-start gap-2">
          <img class="rounded-md p-1.5 bg-white w-10 h-10 shadow-sm" src="https://sacfunded.net/s/sac-logo-black.png"
               alt="Groupe logo">
          <div>
            <h3 class="font-medium">Social Science</h3>
            <p class="text-sm text-light-gray">Meet them & Share your experience</p>
          </div>
        </div>
        <div class="flex items-center justify-start gap-2 mt-5">
          <img class="rounded-md p-1.5 bg-white w-10 h-10 shadow-sm" src="https://sacfunded.net/s/sac-logo-black.png"
               alt="Groupe logo">
          <div>
            <h3 class="font-medium">Human Economic</h3>
            <p class="text-sm text-light-gray">Meet them & Share your experience</p>
          </div>
        </div>
      </div>

      <div class="text-sm font-medium w-full">
        <h2 class="font-semibold text-xl mb-3">Mon suivi :</h2>
        <div
          class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 rounded-t-2xl border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd" />
              </svg>
              <p>Votre activité</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
        <div
          class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clip-rule="evenodd" />
              </svg>
              <p>Mes cours</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
        <div
          class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
              </svg>
              <p>Favoris</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
        <div
          class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              <p>Jobs</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
        <div
          class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
              </svg>
              <p>Paramètres</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
        <div @click.prevent="handleLogout"
             class="flex text-light-gray stroke-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 rounded-b-2xl">
          <div class="flex items-center justify-start gap-3">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
              </svg>
              <p>Se déconnecter</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        </div>
      </div>
    </section>
    <ui-footer/>
  </main>
</template>
