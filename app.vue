<template>
  <main class="font-poppins bg-[color:#EFF0F4] flex flex-col mx-auto p-5 pb-24 gap-5">
    <PostClassic />
    <PostEvent v-for="index in 10" :key="index" />
  </main>
  <nav style="transform: translateX(-50%)" class="fixed bottom-5 left-1/2 rounded-full bg-white shadow-md">
    <ul class="flex items-center justify-between rounded-full">
      <li class="p-4 hover:bg-blue-600 hover:fill-white rounded-tl-full rounded-bl-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
      </li>
      <li class="p-4 hover:bg-blue-600 hover:fill-white">
        <svg width="18" height="18" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/></svg>
      </li>
      <li class="p-4 hover:bg-blue-600 rounded-tr-full rounded-br-full">
        <img class="w-5 h-5 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
      </li>
    </ul>
  </nav>
</template>