<script setup>
import { useThreadStore } from '@/stores/ThreadStore'

definePageMeta({
    middleware: 'auth'
})
const { find } = useStrapi(),
    store = useThreadStore(),
    pending = ref(true)
try {
    const { data } = await find('threads', { populate: { answers: { count: true }, author: true } })
    if (data) await store.setThreads({ threads: data })
} catch ({ error }) {
    console.log(error)
} finally {
    pending.value = false
}
</script>
<template>
    <ui-loader v-if="pending" class="flex-1 p-5 w-full flex items-center justify-center"/>
    <template v-else>
        <ui-search />
        <div id="header" class="p-5">
            <h2 class="font-semibold text-xl mb-4">Besoin d'aide ?</h2>
            <div class="w-full flex items-center justify-between gap-4">
                <NuxtLink :to="{ name: 'devoirs' }">
                    <div class="flex items-center justify-center w-14 h-14 shadow-sm rounded-full object-cover bg-white">
                        <svg class="fill-custom-purple w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                    </div>
                    <p class="text-xs text-center mt-2 font-medium text-light-gray">Devoirs</p>
                </NuxtLink>
                <NuxtLink :to="{ name: 'bon-plans' }">
                    <div class="flex items-center justify-center w-14 h-14 shadow-sm rounded-full object-cover bg-white">
                        <svg class="fill-custom-purple w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-xs text-center mt-2 font-medium text-light-gray">Bon plans</p>
                </NuxtLink>
                <NuxtLink :to="{ name: 'groups' }">
                    <div class="flex items-center justify-center w-14 h-14 shadow-sm rounded-full object-cover bg-white">
                        <svg class="fill-custom-purple w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                        </svg>
                    </div>
                    <p class="text-xs text-center mt-2 font-medium text-light-gray">Groupes</p>
                </NuxtLink>
                <NuxtLink :to="{ name: 'jobs' }">
                    <div class="flex items-center justify-center w-14 h-14 shadow-sm rounded-full object-cover bg-white">
                        <svg class="fill-custom-purple w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                    </div>
                    <p class="text-xs text-center mt-2 font-medium text-light-gray">Jobs</p>
                </NuxtLink>
            </div>
        </div>
        <section id="content" class="flex flex-col flex-1 overflow-hidden gap-3 p-5 pb-0">
            <div class="flex items-center justify-between mb-2">
                <h2 class="font-semibold text-xl">Suggestions pour vous</h2>
                <NuxtLink :to="{ name: 'questions' }" class="text-xs text-custom-purple font-semibold">Tout voir</NuxtLink>
            </div>

            <div class="overflow-scroll flex-1 snap-y flex flex-col gap-3">
                <ui-thread v-for="thread in store.getThreads" :key="thread.id" :thread="thread" />

                <article class="snap-start flex items-center justify-start gap-4 rounded-3xl bg-custom-purple shadow-sm mb-3">
                    <img class="w-8 h-8 ml-4" src="/images/revolut.png" alt="Logo Revolut">
                    <div class="flex gap-2 items-center w-full py-4">
                        <div class="w-full">
                            <div class="flex items-center justify-start gap-2">
                                <p class="text-[9px] py-0.5 px-1 rounded-md bg-white text-custom-purple font-medium">Ad</p>
                                <p class="font-medium text-white">Revolut</p>
                            </div>
                            <p class="text-xs text-white">Téléchargez Revolut et profitez mieux de votre argent chaque jour</p>
                        </div>
                    </div>
                    <div class="w-10 rounded-r-3xl h-full flex items-center justify-center p-2 pr-0 mr-4">
                        <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clip-rule="evenodd" />
                            <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                        </svg>
                    </div>
                </article>
            </div>
        </section>
    </template>
</template>
