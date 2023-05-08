<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
    <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
      <div @click="() =>  router.go(-1)" class="flex items-center justify-center p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
        <svg class="fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
      </div>
    </header>
    <slot />
  </main>
</template>
