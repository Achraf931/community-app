<script setup>
const props = defineProps({
  answer: {
    type: Object,
    required: true
  },
  first: {
    type: Boolean,
    default: false
  }
})

const more = ref(false),
    open = ref(false),
    target = ref(null),
    counter = ref(0),
    showComments = ref(false),
    comment = ref(''),
    comments = ref(props.answer.attributes.comments.data),
    strapi = useStrapi(),
    user = useStrapiUser(),
    answerUpdated = ref(props.answer),
    timer = ref(null),
    iLiked = computed(() => {
      return !!answerUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id).length
    }),
    isFullscreen = ref(false)

onClickOutside(target, () => open.value = false)

const handleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}

const onClick = async () => {
  counter.value++

  if (counter.value === 1) {
    timer.value = setTimeout(() => {
      counter.value = 0
    }, 300)

    return
  }

  clearTimeout(timer.value)
  counter.value = 0
  await handleLike()
}

const handleLike = async () => {
  try {
    const liked = answerUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id)
    if (!!liked.length) {
      answerUpdated.value.attributes.likes.data = [...answerUpdated.value.attributes.likes.data.filter(like => like.id !== liked[0].id)]
      await strapi.delete('likes', liked[0].id)
    } else {
      const answer = await useApi(`likes?${
          useQueryString({
            populate: {
              answer: { populate: { likes: { populate: '*' } } }
            }
          })
      }`, {
        method: 'POST',
        body: {
          data: {
            answer: props.answer.id,
            author: user.value.id
          }
        }
      }).then(({ data }) => data.value.data.attributes.answer.data)
      answerUpdated.value.attributes.likes = answer.attributes.likes
    }
  } catch (error) {
    console.log(error)
  }
}

const handleComment = async () => {
  //  create new comment
  if (comment.value.length) {
    await useApi(`comments?${
        useQueryString({
          populate: {
            author: true,
            likes: {
              populate: '*'
            }
          }
        })
    }`, {
      method: 'POST',
      body: {
        data: {
          content: comment.value,
          author: user.value.id,
          answer: props.answer.id
        }
      }
    }).then(({ data }) => {
      comments.value = [...comments.value, data.value.data]
      props.answer.attributes.comments.data.length = comments.value.length
      comment.value = ''
    })
  }
}

props.answer.attributes.content = props.answer.attributes.content.replace(/(https?:\/\/\S+)/g, (url) => {
  return `<a href="${url}" target="_blank" class="text-custom-purple font-bold">Voir le lien</a>`
})
</script>
<template>
  <article @click="onClick"
           :class="isFullscreen ? 'absolute top-0 left-0 w-screen h-screen z-30 items-start p-5 rounded-none bg-white' : 'rounded-3xl relative'"
           class="snap-start bg-custom-light-gray flex justify-start gap-4 shadow-custom-light-gray shadow-sm p-4">
    <div class="flex flex-col gap-2 items-center">
      <div>
        <NuxtLink class="contents min-w-[2.5rem]"
                  :to="{ name: 'profile-id', params: { id: props.answer.attributes.author.data.id } }">
          <img class="w-10 h-10 min-w-[2.5rem] rounded-xl object-cover shadow-custom-light-gray shadow-md"
               :src="props.answer.attributes.author.data.attributes.avatar_url" alt="Photo de profil">
        </NuxtLink>
        <div v-if="first" class="flex items-center justify-center flex-col mt-1">
          <svg class="w-5 h-5 fill-custom-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"/>
          </svg>
          <p class="text-xs text-custom-purple font-medium">Top</p>
        </div>
      </div>
      <div class="w-full">
        <p class="flex items-center text-xs gap-1.5 font-medium text-light-gray">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clip-rule="evenodd"/>
          </svg>
          <span>{{ props.answer.attributes.comments.data.length }}</span>
        </p>
        <p @click="handleLike" class="flex items-center text-xs gap-1.5 font-medium text-light-gray">
          <svg :class="iLiked ? 'fill-custom-pink' : 'fill-light-gray'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
          </svg>
          {{
            (new Intl.NumberFormat('fr-FR', {
              notation: 'compact',
              compactDisplay: 'short'
            }).format(!!props.answer.attributes.likes.data.length ? props.answer.attributes.likes.data.length : 0)).replace('&nbsp;', '')
          }}
        </p>
      </div>
    </div>
    <div :class="isFullscreen ? 'items-start h-full' : 'items-center'" class="flex gap-2 w-full">
      <div :class="{ 'h-full flex flex-col': isFullscreen }" class="w-full">
        <div class="flex items-center justify-between">
          <NuxtLink :to="{ name: 'profile-id', params: { id: props.answer.attributes.author.data.id } }"
                    class="text-sm font-bold">{{ props.answer.attributes.author.data.attributes.firstname }}
            {{ props.answer.attributes.author.data.attributes.lastname }}
          </NuxtLink>
          <div ref="target" class="relative inline-block text-left">
            <svg @click="open = !open" :class="open ? 'fill-custom-purple' : 'fill-light-gray'"
                 class="block w-6 transition-all duration-150 ease-in-out outline-0" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                    clip-rule="evenodd"/>
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
              <div v-show="open"
                   class="duration-150 absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-custom-light-gray shadow-xl focus:outline-none overflow-hidden"
                   role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div role="none">
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm"
                     role="menuitem" tabindex="-1" id="menu-item-0">Ajouter aux favoris</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm"
                     role="menuitem" tabindex="-1" id="menu-item-1">Partager</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm"
                     role="menuitem" tabindex="-1" id="menu-item-2">Masquer</p>
                  <p class="hover:bg-custom-purple hover:text-white text-default block px-4 font-medium py-3 text-sm"
                     role="menuitem" tabindex="-1" id="menu-item-3">Signaler</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <p class="text-xs text-light-gray font-medium mb-4">{{ props.answer.attributes.author.data.attributes.job }}</p>
        <p v-if="props.answer.attributes.content.length >= 200"
           :class="isFullscreen ? 'line-clamp-none overflow-auto mb-5 bg-white p-5 rounded-2xl' : 'line-clamp-2 text-ellipsis'"
           class="content text-sm font-medium">{{ props.answer.attributes.content }}</p>
        <p v-else-if="props.answer.attributes.content.length >= 80 && props.answer.attributes.content.length < 200"
           :class="more ? 'line-clamp-none' : 'line-clamp-2 text-ellipsis'" class="content text-sm font-medium">
          {{ props.answer.attributes.content }}</p>
        <p v-else-if="props.answer.attributes.content.length < 80"
           :class="more ? 'line-clamp-none' : 'line-clamp-2 text-ellipsis'" class="content text-sm font-medium">
          {{ props.answer.attributes.content }}</p>
        <p v-if="props.answer.attributes.content.length >= 80 && props.answer.attributes.content.length < 200"
           class="text-xs font-semibold block text-custom-purple mt-1" @click="more = !more">Lire
          {{ more ? 'moins' : 'tout' }}</p>
        <template v-else-if="props.answer.attributes.content.length >= 200">
          <svg v-if="!isFullscreen" @click="handleFullscreen"
               class="w-4 h-4 ml-auto mt2 fill-light-gray stroke-light-gray" stroke-width=".2"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                  clip-rule="evenodd"/>
          </svg>
          <div v-else @click="handleFullscreen" :class="{ 'mt-auto ml-auto mb-10': isFullscreen }"
               class="flex items-center justify-center p-2.5 bg-custom-light-gray shadow-custom-light-gray shadow-sm rounded-full">
            <svg class="w-6 h-6 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
        </template>
        <div class="mt-2 flex relative">
          <div v-if="comment !== ''" @click="handleComment"
               class="absolute top-1/2 right-0 -translate-y-1/2 bg-custom-purple rounded-full">
            <svg class="w-5 h-5 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <textarea v-model="comment" rows="2" class=" border-b border-solid border-light-gray/20 pr-6 resize-none h-full caret-custom-purple text-light-gray bg-transparent text-xs outline-none w-full" type="text" placeholder="Répondre..."></textarea>
        </div>
        <p v-if="comments.length" @click="showComments = !showComments" class="text-custom-purple font-medium text-xs mt-1.5">{{ showComments ? 'Cacher' : 'Voir' }} {{ comments.length === 1 ? 'le' : `les ${comments.length}` }} commentaire{{ comments.length > 1 ? 's' : '' }}</p>
        <div v-if="showComments && comments.length" class="flex flex-col items-start justify-start gap-4 mt-2">
          <ui-comment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
      </div>
    </div>
  </article>
</template>
