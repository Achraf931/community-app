<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const store = useAuthStore()
</script>
<template>
  <nav class="rounded-t-3xl z-10 bg-white dark:bg-custom-gray dark:fill-white py-2.5 pb-7">
    <ul class="flex items-center justify-around">
      <NuxtLink exact-active-class="active" to="/" class="flex items-center justify-center p-2 w-10 h-10">
        <svg  class="w-7 h-7 fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
      </NuxtLink>
      <NuxtLink exact-active-class="active" :to="{ name: 'questions' }" class="p-2">
        <svg class="w-7 h-7 fill-light-gray stroke-light-gray"
             width="30" height="30" stroke-linejoin="round"
             stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/>
        </svg>
      </NuxtLink>
      <li class="p-2">
        <svg class="w-7 h-7 fill-light-gray stroke-light-gray" clip-rule="evenodd" fill-rule="evenodd" width="24" height="24" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
      </li>
      <li class="p-2">
        <NuxtLink :to="{ name: 'messages' }">
          <svg class="w-7 h-7 fill-light-gray stroke-light-gray" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z"/></svg>
        </NuxtLink>
      </li>
      <li class="p-2">
        <NuxtLink :to="{ name: 'account' }">
          <img class="w-7 h-7 p-0.5 rounded-full object-cover border border-solid border-custom-purple" :src="store.getUser.avatar_url" alt="Photo de profil">
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style>
  .active > svg {
      fill: #9087E6!important;
      stroke: #9087E6!important;
  }
</style>
