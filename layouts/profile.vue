<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <main class="font-lexend text-default h-screen bg-white flex flex-col align-top justify-between mx-auto">
    <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
      <div @click="() =>  router.go(-1)" class="flex items-center justify-center p-2.5 w-10 h-10 bg-custom-light-gray shadow-custom-light-gray shadow-sm rounded-full">
        <svg class="w-5 h-5 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </header>
    <slot />
    <ui-footer />
  </main>
</template>
