<script setup lang="ts">
    const router = useRouter()
    definePageMeta({
        middleware: 'auth'
    })
</script>
<template>
    <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
        <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
            <div @click="() =>  router.go(-1)" class="flex items-center justify-center p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
                <svg class="fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
            </div>
            <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
                <svg class="fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z"/></svg>
            </div>
        </header>
        <slot />
        <ui-footer />
    </main>
</template>
