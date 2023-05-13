<script setup>
const more = ref(false),
    open = ref(false),
    target = ref(null)

onClickOutside(target, () => open.value = false)
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  })
</script>
<template>
  <article class="snap-start relative flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
      <div class="flex flex-col justify-between items-center">
        <div>
            <NuxtLink class="contents" :to="{ name: 'profile-id', params: { id: props.data.attributes.author.data.id } }">
                <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="props.data.attributes.author.data.attributes.avatar_url" alt="Photo de profil">
            </NuxtLink>
            <div v-if="first" class="flex items-center justify-center flex-col mt-1">
                <svg class="w-5 h-5 fill-custom-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <p class="text-xs text-custom-purple font-medium">Top</p>
        </div>
        </div>
        <small :class="first ? 'text-custom-purple fill-custom-purple stroke-custom-purple' : 'text-light-gray fill-light-gray stroke-light-gray'" class="flex items-center text-xs justify-center gap-1.5 font-medium">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          {{
            (new Intl.NumberFormat('fr-FR', {
              notation: 'compact',
              compactDisplay: 'short'
            }).format(1223)).replace('&nbsp;', '')
          }}
      </small>
      </div>
    <div class="flex gap-2 items-center w-full">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <NuxtLink :to="{ name: 'profile-id', params: { id: props.data.attributes.author.data.id } }" class="text-base font-medium">{{ props.data.attributes.author.data.attributes.firstname }} {{ props.data.attributes.author.data.attributes.lastname }}</NuxtLink>
          <div ref="target" class="relative inline-block text-left">
              <svg @click="open = !open" :class="open ? 'fill-custom-purple' : 'fill-light-gray'" class="block w-6 transition-all duration-150 ease-in-out outline-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
              </svg>

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
              <div v-show="open" class="duration-150 absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div role="none">
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Ajouter aux favoris</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Partager</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Masquer</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Signaler</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <p class="text-xs text-light-gray mb-4">{{ props.data.attributes.author.data.attributes.job }}</p>
        <p :class="more ? 'line-clamp-none' : 'line-clamp-2'" class="content font-medium text-ellipsis">{{ props.data.attributes.content }}</p>
        <p v-if="props.data.attributes.content.length > 80" class="text-xs font-semibold block text-custom-purple mt-1" @click="more = !more">Lire {{ more ? 'moins' : 'tout' }}</p>
      </div>
    </div>
  </article>
</template>
