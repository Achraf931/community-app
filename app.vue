<script setup>
//  const { find } = useStrapi()
//  const { data } = await find('posts', { populate: '*', sort: 'createdAt:desc' })
const toggleDarkMode = () => {
  document.getElementById('container').classList.toggle('dark')
}
</script>
<template>
  <div id="container" class="dark">
    <main class="font-questrial h-screen bg-slate-100 dark:bg-default flex flex-col align-top mx-auto overflow-hidden">
      <header class="w-full rounded-xl flex justify-between pt-5 p-3">
        <h1 class="text-2xl text-indigo-600 dark:text-white">Community.</h1>
        <div class="flex gap-4 dark:fill-white">
          <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-mid-gray rounded-full">
            <svg class="fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" width="24" height="24" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
          </div>
          <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-mid-gray rounded-full">
            <svg class="fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z"/></svg>
          </div>
          <div class="flex items-center justify-center p-2.5 w-10 h-10 bg-mid-gray rounded-full active:bg-white hover:bg-white focus:bg-white">
            <svg class="fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
          </div>
        </div>
      </header>
      <section id="content" class="flex flex-col flex-1 overflow-scroll gap-3 p-3 pb-0">
        <Stories />
        <PostClassic :post="{ username: 'charfeddine', content: 'J\'ai des choses ?? partager.', createdAt: '01/01/2023', image: 'https://64.media.tumblr.com/6b10b690fad3fad94f872e4815ca6ead/c30dda677d7ee36e-10/s1280x1920/fe9d01f796511546e3c03fb53621e9b0967c93be.jpg' }" :id="1" />
        <PostClassic :post="{ username: 'kirito', content: 'J\'ai une mission ?? accomplir !', createdAt: '01/01/2023', image: 'http://ekladata.com/ufkXG2seEA0F9VnKB6X7h6dYeKU.jpg' }" :id="2" />
        <PostClassic :post="{ username: 'jafar', content: 'Soyez sans crainte, tout se passera pour le mieux.', createdAt: '01/01/2023', image: 'https://pbs.twimg.com/profile_images/1234728999793963008/zNzTRkhi_400x400.jpg' }" :id="3" />
        <PostClassic :post="{ username: 'bob', content: 'Je suis moche et je suis fier.', createdAt: '01/01/2023', image: 'https://i.topi.to/6w2tUFXwGFdVT2vbFguzOL9FdV1mErV8bqsBh4dm3mk=/670x327/smart/filters:fill(white):format(webp):quality(70)/https://media.topito.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fbob-leponge.jpg' }" :id="4" />
        <PostClassic :post="{ username: 'eren', content: 'Les fous sont ceux qui acceptent de vivre comme du b??tail.', createdAt: '01/01/2023', image: 'https://cdn.shopify.com/s/files/1/0502/5506/9351/files/eren-yeager_18158cde-8f37-44d3-8085-27be2aa56664.jpg?v=1626256646' }" :id="5" />
      </section>
      <nav class="rounded-t-3xl shadow-[0_0_20px_rgba(0,0,0,0.75)] bg-white dark:bg-custom-gray dark:fill-white py-2.5 pb-4">
        <ul class="flex items-center justify-around rounded-full">
          <li class="flex items-center justify-center p-2.5 w-10 h-10 bg-mid-gray rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
          </li>
          <li class="p-4 hover:bg-blue-600 hover:fill-white">
            <svg width="18" height="18" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/></svg>
          </li>
          <li class="p-4 hover:bg-blue-600 rounded-tr-full rounded-br-full">
            <img class="w-5 h-5 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
          </li>
<!--          <li class="p-4 rounded-tr-full rounded-br-full">
            <svg @click="toggleDarkMode" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm5 3c0-2.761-2.238-5-5-5h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14zm-13 12h-2v3h-2v-3h-2v-3h6v3zm-2-13h-2v8h2v-8zm10 5h-6v3h2v8h2v-8h2v-3zm-2-5h-2v3h2v-3z"/></svg>
          </li>-->
        </ul>
      </nav>
    </main>
  </div>
</template>

<style scoped>
#content::-webkit-scrollbar {
  display: none;
}
#content {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>