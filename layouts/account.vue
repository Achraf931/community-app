<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'

const store = useAuthStore()
</script>
<template>
    <main class="font-poppins text-default h-screen bg-custom-light-gray flex flex-col align-top justify-between mx-auto">
        <header v-if="store.getUser" class="w-full bg-white rounded-xl flex items-center justify-between p-5">
            <img class="w-10 h-10 p-0.5 rounded-full object-cover border border-solid border-custom-purple"
                 :src="store.getUser.avatar_url"
                 alt="Photo de profil">
            <div>
                <h1 class="text-center text-xl font-bold">{{ store.getUser.firstname }}</h1>
                <p class="text-xs text-light-gray font-medium">{{ store.getUser.job }}
                    <span>
                        chez {{ store.getUser.company }}
                    </span>
                </p>
            </div>
            <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-custom-light-gray shadow-custom-light-gray shadow-sm rounded-full">
              <svg class="w-5 h-5 stroke-light-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
        </header>
        <slot />
        <ui-footer />
    </main>
</template>
