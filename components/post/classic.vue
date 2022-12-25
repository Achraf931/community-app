<script setup>
const props = defineProps({
  category: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: 'Hello, someone can help me to finish my courses please ?',
  }
})
</script>
<template>
  <article class="text-gray-400 relative p-5 pb-7 rounded-xl bg-white dark:bg-neutral-900 text-sm text-gray-400 flex flex-col gap-2">
    <p v-if="props.category" class="text-xs border-b border-solid fill-gray-400 border-slate-200 flex items-center gap-1 pb-2">
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-3v9l-2-1.547-2 1.547v-9h-8v16h15v-16z"/></svg>
      <span>{{ props.category }}</span>
    </p>

    <header class="flex gap-1 items-center">
      <img class="w-5 h-5 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
      <small class="text-xs">@charfeddine</small>
    </header>

    <p>{{ props.content }}</p>
  </article>
</template>