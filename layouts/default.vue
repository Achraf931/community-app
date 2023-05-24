<template>
    <main class="font-lexend text-default h-screen bg-white flex flex-col justify-between align-top mx-auto">
        <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
            <NuxtLink to="/" class="text-2xl font-black dark:text-white">S<span class="text-custom-purple">t</span>ud'up<span class="text-custom-pink">.</span></NuxtLink>
            <div class="flex gap-4">
                <ui-search />
                <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-custom-light-gray shadow-custom-light-gray shadow-sm rounded-full">
                    <svg class="w-5 h-5 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </header>
        <slot />
        <ui-footer />
    </main>
</template>

<script setup lang="ts">
</script>
