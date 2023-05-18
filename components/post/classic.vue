<script setup>
const { $dayjs } = useNuxtApp();

const open = ref(false)
const target = ref(null)

onClickOutside(target, () => open.value = false)

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
<!--  <article class="text-slate-600 dark:text-slate-300 relative p-5 rounded-xl bg-white dark:bg-custom-gray text-sm text-gray-400 flex flex-col gap-2">
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
  </article>-->
  <article class="flex flex-col bg-custom-gray gap-4 py-4 px-2 rounded-3xl last:mb-3">
    <header class="flex gap-4 px-2 items-center justify-between">
      <div class="flex gap-2 items-center">
        <img class="w-10 h-10 p-0.5 rounded-full object-cover border border-solid border-custom-pink" :src="props.post.image" alt="Photo de profil">
        <div>
          <p class="text-base text-custom-white font-medium">{{ props.post.username }}</p>
          <p class="text-xs text-light-gray">{{ $dayjs(props.post.createdAt).locale('fr').fromNow() }}</p>
        </div>
      </div>
        <div ref="target" class="relative inline-block text-left">
          <svg @click="open = !open" :class="open ? 'fill-light-gray' : 'fill-mid-gray'" class="w-10 h-10 transition-all duration-150 ease-in-out outline-0" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm2.498 9.995c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z"/></svg>

            <transition
              enter-active-class="ease-out"
              enter-from-class="transform opacity-0 scale-95"
              leave-from-class="transform opacity-100 scale-100"

              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="ease-in"
              leave-class="opacity-100"
              leave-to-class="transform opacity-0 scale-95"
              mode="out-in"
              appear
            >
                <div v-show="open" class="duration-150 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-mid-gray shadow-custom-light-gray shadow-lg focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div role="none">
                        <p class="hover:bg-light-gray text-custom-white block px-4 font-medium py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Signaler</p>
                        <p class="hover:bg-light-gray text-custom-white block px-4 font-medium py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Partager</p>
                        <p class="hover:bg-light-gray text-custom-white block px-4 font-medium py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Masquer</p>
                        <p class="hover:bg-light-gray text-custom-white block px-4 font-medium py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Ajouter aux favoris</p>
                    </div>
                </div>
            </transition>
        </div>
    </header>

    <img v-if="props.id === 3" class="rounded-t-3xl" src="https://static1.purebreak.com/articles/2/13/37/32/@/557689-aladdin-le-nouveau-jafar-est-tres-sexy-opengraph_1200-2.jpg" alt="image">
    <img v-else-if="props.id === 1" class="rounded-t-3xl" src="https://www.challenges.fr/assets/img/2016/12/11/cover-r4x3w1000-586397a9de82c-yourname2.jpg" alt="image">
    <p style="list-style: none" class="px-2 text-custom-white font-medium" v-html="props.post.content" />
    <footer class="flex flex-col gap-4 px-4">
      <div id="icons" class="flex items-start gap-4">
        <div>
          <svg class="fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
          <p class="text-center text-light-gray text-xs mt-1">229</p>
        </div>
        <div>
          <svg class="fill-light-gray stroke-light-gray" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
          <p class="text-center text-light-gray text-xs mt-1">13</p>
        </div>
        <svg class="fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
      </div>
    </footer>
  </article>
</template>
