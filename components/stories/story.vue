<script setup>
const props = defineProps({
  author: {
    type: Object,
    default: {
      name: 'kirito',
      image: 'https://i.pinimg.com/originals/7b/f1/75/7bf1753f515f4efd0bf5572f713335dc.jpg'
    }
  }
})
</script>

<template>
  <article>
    <img class="w-16 h-16 p-0.5 rounded-full object-cover border border-solid border-custom-pink" :src="author.image" alt="Photo de profil">
    <p class="text-xs text-custom-white text-center font-medium mt-0.5">{{ author.name }}</p>
  </article>
</template>