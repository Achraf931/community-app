<script setup>
import { useThreadStore } from '@/stores/ThreadStore'

definePageMeta({
    layout: 'questions',
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
        <ui-search :data="data" />
        <div class="flex items-center justify-between mb-4 px-5">
            <h2 class="font-semibold text-xl">Questions du moment</h2>
            <svg class="w-5 h-5 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
        </div>
        <section class="flex flex-col gap-5 p-5 flex-1 overflow-auto snap-y">
            <ui-thread v-for="thread in store.getThreads" :key="thread.id" :thread="thread" />
        </section>
    </template>
</template>
