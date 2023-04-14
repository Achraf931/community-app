<script setup>
const data = reactive([
    { id: 1, username: 'charfeddine', content: 'J\'ai des choses à partager.', createdAt: '01/01/2023', image: 'https://64.media.tumblr.com/6b10b690fad3fad94f872e4815ca6ead/c30dda677d7ee36e-10/s1280x1920/fe9d01f796511546e3c03fb53621e9b0967c93be.jpg' },
    { id: 2, username: 'kirito', content: 'J\'ai une mission à accomplir !', createdAt: '01/01/2023', image: 'https://ekladata.com/ufkXG2seEA0F9VnKB6X7h6dYeKU.jpg' },
    { id: 3, username: 'jafar', content: 'Soyez sans crainte, tout se passera pour le mieux.', createdAt: '01/01/2023', image: 'https://pbs.twimg.com/profile_images/1234728999793963008/zNzTRkhi_400x400.jpg' },
    { id: 4, username: 'bob', content: 'Je suis moche et je suis fier.', createdAt: '01/01/2023', image: 'https://i.topi.to/6w2tUFXwGFdVT2vbFguzOL9FdV1mErV8bqsBh4dm3mk=/670x327/smart/filters:fill(white):format(webp):quality(70)/https://media.topito.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fbob-leponge.jpg' },
    { id: 5, username: 'eren', content: 'Les fous sont ceux qui acceptent de vivre comme du bétail.', createdAt: '01/01/2023', image: 'https://cdn.shopify.com/s/files/1/0502/5506/9351/files/eren-yeager_18158cde-8f37-44d3-8085-27be2aa56664.jpg?v=1626256646' }
])
</script>
<template>
    <section id="content" class="flex flex-col flex-1 overflow-scroll gap-3 p-3 pb-0">
        <Stories />
        <PostClassic v-for="post in data" :post="post" :id="post.id" />
    </section>
</template>
