<script setup>
  definePageMeta({
      layout: 'sign',
      middleware: 'guest'
  })

  useHead({
      meta: [{
          name: 'theme-color',
          content: '#22262F'
      }]
  })
</script>

<template>
  <section class="flex-1 bg-[#22262F] flex flex-col gap-5 items-center justify-around p-5">
      <div class="text-white">
          <h1 class="text-4xl text-center font-black dark:text-white">
              B<span class="text-custom-purple">r</span>inging<br />it a<span class="text-custom-pink">l</span>l
          </h1>
          <p class="text-sm text-center mt-5 font-medium">
              Vous souhaitez entrer en contact avec d'autres étudiants ? Pas de problème, nous avons des millions de nouveaux amis ici qui veulent vous aider.
          </p>
      </div>

      <svg class="w-64 h-64 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>

      <div class="grid grid-cols-2 items-center justify-center gap-3 w-full">
          <NuxtLink :to="{ name: 'login' }" class="text-sm bg-custom-purple text-white text-center font-semibold py-4 px-5 rounded-2xl">Me connecter</NuxtLink>
          <NuxtLink :to="{ name: 'register' }" class="text-sm bg-custom-purple text-white text-center font-semibold py-4 px-5 rounded-2xl">M'inscrire</NuxtLink>
      </div>
  </section>
</template>
