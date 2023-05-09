<template>
    <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
        <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
            <div class="flex items-center justify-between w-full gap-3">
                <div class="flex items-center justify-start gap-3">
                    <img class="w-10 h-10 p-0.5 mx-auto rounded-full object-cover border border-solid border-custom-purple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
                    <div>
                        <p class="font-bold text-xl">John Doe</p>
                        <p class="text-xs text-light-gray">Développeur web</p>
                    </div>
                </div>
                <div>
                    <div class="h-3.5 w-3.5 bg-custom-purple rounded-sm shadow-sm"></div>
                    <div class="h-3.5 w-3.5 bg-custom-purple rounded-sm shadow-sm mt-1"></div>
                </div>
            </div>
        </header>
        <slot />
        <ui-footer />
    </main>
</template>

<script setup lang="ts">
</script>
