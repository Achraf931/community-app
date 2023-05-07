<template>
  <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
    <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
      <NuxtLink to="/" class="text-xl font-extrabold dark:text-white">Community<span class="text-custom-purple">.</span></NuxtLink>
    </header>
    <slot />
  </main>
</template>
