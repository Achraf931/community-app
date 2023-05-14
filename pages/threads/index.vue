<script setup>
import { useThreadStore } from '@/stores/ThreadStore'

definePageMeta({
    layout: 'threads',
    middleware: 'auth'
})
const store = useThreadStore(),
    { find } = useStrapi(),
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
        <section class="px-5 pb-5">
            <article class="flex items-center text-center justify-start gap-4 rounded-3xl text-white background-custom shadow-sm p-5 aspect-video">
                <h1 class="font-bold text-xl">Un bon petit wording pour bien remplir tout ça !</h1>
            </article>
        </section>
        <div class="flex items-center justify-between px-5">
            <h2 class="font-bold">Questions du moment</h2>
            <svg class="w-5 h-5 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
        </div>
        <section class="flex flex-col flex-1 overflow-hidden gap-3 px-5 pt-3 pb-0">
            <div class="overflow-scroll flex-1 snap-y flex flex-col gap-3 rounded-2xl">
                <ui-thread v-for="thread in store.getThreads" :key="thread.id" :thread="thread" />
                <ui-mini-ad class="!mb-0" />
                <ui-thread v-for="thread in store.getThreads" :key="thread.id" :thread="thread" />
                <ui-mini-ad />
            </div>
        </section>
    </template>
</template>

<style scoped>
    .background-custom {
        background: linear-gradient(to right bottom, #ee2095, #db2eaa, #c23ebd, #a34bcc, #7c57d7, #a355d3, #c353cc, #df52c4, #ff5d97, #ff8d67, #ffc848, #f9ff5c);
    }
</style>
