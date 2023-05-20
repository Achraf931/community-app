<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const store = useAuthStore()
</script>
<template>
    <nav class="rounded-t-3xl z-10 p-5 pt-0 bg-transparent">
        <ul class="flex items-center justify-around bg-default rounded-3xl">
            <li class="p-2">
                <NuxtLink exact-active-class="active" to="/" aria-label="Accéder à la page d'accueil">
                    <svg class="w-8 h-8 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                    </svg>
                </NuxtLink>
            </li>
            <li class="p-2">
                <NuxtLink exact-active-class="active" active-class="active" :to="{ name: 'threads' }" aria-label="Accéder à la liste des threads">
                    <svg class="w-8 h-8 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </li>
            <li class="py-4 px-2">
                <NuxtLink exact-active-class="active" :to="{ name: 'threads-create' }" aria-label="Accédez à la création de thread">
                    <svg class="w-8 h-8 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </li>
            <li class="p-2">
                <NuxtLink exact-active-class="active" :to="{ name: 'messages' }" aria-label="Accédez à mes messages">
                    <svg class="w-8 h-8 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         fill="currentColor">
                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"/>
                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"/>
                    </svg>
                </NuxtLink>
            </li>
            <li class="p-2">
                <NuxtLink exact-active-class="profil-active" :to="{ name: 'account' }" aria-label="Accédez à mon compte">
                    <img v-if="store.getUser?.avatar_url" class="w-8 h-8 p-0.5 rounded-full object-cover border border-solid border-transparent"
                         :src="store.getUser.avatar_url" alt="Photo de profil">
                    <svg v-else class="w-8 h-8 fill-light-gray p-0.5 border border-solid border-light-gray rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<style>
.active > svg {
    fill: rgb(79 70 229) !important;
}
.profil-active > img {
    border-color: rgb(79 70 229) !important;
    fill: rgb(79 70 229) !important;
}
</style>
