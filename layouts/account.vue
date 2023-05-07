<template>
    <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
        <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
            <div class="flex items-center justify-start gap-3">
                <img class="w-10 h-10 p-0.5 mx-auto rounded-full object-cover border border-solid border-custom-purple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
                <div>
                    <p class="font-bold text-xl">John Doe</p>
                    <p class="text-xs text-light-gray">Développeur web</p>
                </div>
            </div>
            <div class="flex items-center justify-center ml-auto p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
                <svg class="fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
            </div>
        </header>
        <slot />
        <nav class="rounded-t-3xl z-10 bg-white dark:bg-custom-gray dark:fill-white py-2.5 pb-7">
            <ul class="flex items-center justify-around">
                <NuxtLink to="/" class="flex items-center justify-center p-2 w-10 h-10">
                    <svg  class="w-7 h-7 fill-custom-purple" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                </NuxtLink>
                <li class="p-2">
                    <svg class="w-7 h-7 fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" width="24" height="24" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
                </li>
                <li class="p-2">
                    <NuxtLink :to="{ name: 'login' }">
                        <svg class="w-7 h-7 fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                    </NuxtLink>
                </li>
                <li class="p-2">
                    <NuxtLink :to="{ name: 'account' }">
                        <img class="w-7 h-7 p-0.5 rounded-full object-cover border border-solid border-custom-purple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </main>
</template>
<script setup lang="ts">
</script>
