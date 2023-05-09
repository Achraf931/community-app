<script setup lang="ts">
const open = ref(false)
const target = ref(null)

onClickOutside(target, () => open.value = false)
</script>
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

            <div ref="target" class="relative inline-block text-left">
                <div @click="open = !open" class="flex items-center justify-center ml-auto transition-all duration-150 ease-in-out outline-0 p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
                    <svg class="fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                </div>

                <transition
                    enter-active-class="ease-out"
                    enter-from-class="transform opacity-0 scale-95"
                    leave-from-class="transform opacity-100 scale-100"

                    enter-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="ease-in"
                    leave-class="opacity-100"
                    leave-to-class="transform opacity-0 scale-95"
                    mode="out-in"
                    appear
                >
                    <div v-show="open" class="duration-150 text-default absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-sm focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div role="none">
                            <p class="flex items-center justify-start gap-3 hover:bg-custom-purple active:bg-custom-purple hover:text-white active:text-white hover:fill-white active:fill-white px-4 font-medium text-light-gray fill-light-gray py-3 border-b border-solid border-custom-light-gray text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                Paramètres
                            </p>
                            <p class="flex items-center justify-start gap-3 hover:bg-custom-purple active:bg-custom-purple hover:text-white active:text-white hover:fill-white active:fill-white px-4 font-medium text-light-gray fill-light-gray py-3 border-b border-solid border-custom-light-gray text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
                                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.732 13h1.504s2.32-8.403 2.799-10.263c.156-.605.646-.738.965-.737.319.001.826.224.947.74.581 2.466 3.11 13.908 3.11 13.908s1.597-6.441 1.943-7.891c.101-.425.536-.757 1-.757.464 0 .865.343 1 .707.312.841 1.675 4.287 1.677 4.293h1.591c.346-.598.992-1 1.732-1 1.104 0 2 .896 2 2s-.896 2-2 2c-.741 0-1.388-.404-1.734-1.003-.939-.001-1.856 0-2.266.003-.503.004-.774-.289-.928-.629l-.852-2.128s-1.828 7.367-2.25 8.999c-.153.595-.646.762-.97.758-.324-.004-.847-.198-.976-.783-.549-2.487-2.081-9.369-3.123-14.053 0 0-1.555 5.764-1.936 7.099-.13.454-.431.731-.965.737h-2.268c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1z"/></svg>
                                Votre activité
                            </p>
                            <p class="flex items-center justify-start gap-3 hover:bg-custom-purple active:bg-custom-purple hover:text-white active:text-white hover:fill-white active:fill-white px-4 font-medium text-light-gray fill-light-gray py-3 border-b border-solid border-custom-light-gray text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
                                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.546 1l5.454 6.986v15.014h-24v-15.014l5.477-6.986h13.069zm-5.546 14v-3h-2v3h-3l4 4 4-4h-3zm8.474-7l-3.906-5h-11.085l-3.951 5h18.942z"/></svg>
                                Enregistré
                            </p>
                            <p class="flex items-center justify-start gap-3 hover:bg-custom-purple active:bg-custom-purple hover:text-white active:text-white hover:fill-white active:fill-white px-4 font-medium text-light-gray fill-light-gray py-3 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
                                <svg class="w-5 h-5" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                                Favoris
                            </p>
                        </div>
                    </div>
                </transition>
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

