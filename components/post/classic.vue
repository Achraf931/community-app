<script setup>
import post from "~/server/api/post";

const { $dayjs } = useNuxtApp();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  }
})
</script>
<template>
  <article class="text-slate-600 dark:text-slate-300 relative p-5 rounded-xl bg-white dark:bg-neutral-900 text-sm text-gray-400 flex flex-col gap-2">
    <p v-if="props.post.topic" class="text-xs border-b border-solid fill-gray-400 border-slate-200 flex items-center gap-1 pb-2">
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-3v9l-2-1.547-2 1.547v-9h-8v16h15v-16z"/></svg>
      <span>{{ props.post.topic.data.attributes.title }}</span>
    </p>

    <div class="my-2.5">
      <header class="flex gap-1 items-center">
        <img class="w-5 h-5 rounded-full object-cover" :src="props.post.author.data.attributes.image" alt="Photo de profil">
        <small class="text-xs">@{{ props.post.author.data.attributes.username }}</small>
      </header>

      <p style="list-style: none" class="mt-2 dark:text-white text-slate-800" v-html="props.post.content" />

      <img class="mt-2" v-if="props.id === 3" src="https://img-0.journaldunet.com/nds11COnzaqETUTlqHDvQyy3YD0=/1500x/smart/ab68ae85e74c4b2691006c0467f8b7dc/ccmcms-jdn/25881466.jpg" alt="image">
    </div>

    <small>{{ $dayjs(props.post.createdAt).locale('fr').fromNow() }}</small>
  </article>
</template>