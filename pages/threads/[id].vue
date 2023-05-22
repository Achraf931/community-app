<script setup>
definePageMeta({
  layout: 'thread',
  middleware: 'auth'
})
const { $dayjs } = useNuxtApp(),
    pending = ref(true),
    route = useRoute(),
    strapi = useStrapi(),
    openedImg = ref(null),
    answer = ref(''),
    user = useStrapiUser(),
    container = ref(null),
    more = ref(true),
    { data } = await useApi(`threads/${route.params.id}?${
        useQueryString({
          populate: {
            author: true,
            likes: { populate: '*' },
            answers: {
              sort: {
                createdAt: 'desc'
              },
              populate: {
                comments: {
                  sort: {
                    createdAt: 'desc'
                  },
                  populate: {
                    author: true,
                    likes: { populate: '*' }
                  }
                },
                author: true,
                thread: {
                  populate: '*'
                },
                likes: {
                  populate: '*'
                }
              }
            }
          }
        })
    }`).then(({ data }) => {
      return data.value
    }),
    threadUpdated = ref(data),
    iLiked = computed(() => {
      return !!threadUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id).length
    })
data.attributes.content = data.attributes.content.replace(/(https?:\/\/\S+)/g, (url) => {
  return `<a href="${url}" target="_blank" class="font-bold">Voir le lien</a>`
})
pending.value = false

const onSubmit = async () => {
  if (!answer.value) return
  try {
    const response = await useApi(`answers?${
        useQueryString({
          sort: { createdAt: 'desc' },
          populate: {
            author: true,
            likes: { populate: '*' },
            comments: {
              sort: {
                createdAt: 'desc'
              },
              populate: '*'
            }
          }
        })
    }`, {
      method: 'POST', body: {
        data: {
          content: answer.value,
          thread: data.id,
          author: user.value.id
        }
      }
    }).then(({ data }) => data.value.data)
    data.attributes.answers.data.unshift(response)
    answer.value = ''
  } catch (error) {
    console.log(error)
  } finally {
    container.value.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const handleLike = async () => {
  try {
    const liked = threadUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id)
    if (!!liked.length) {
      threadUpdated.value.attributes.likes.data = [...threadUpdated.value.attributes.likes.data.filter(like => like.id !== liked[0].id)]
      await strapi.delete('likes', liked[0].id)
    } else {
      const thread = await useApi(`likes?${
          useQueryString({
            populate: {
              thread: { populate: { likes: { populate: '*' } } }
            }
          })
      }`, {
        method: 'POST',
        body: {
          data: {
            thread: data.id,
            author: user.value.id
          }
        }
      }).then(({ data }) => data.value.data.attributes.thread.data)
      threadUpdated.value.attributes.likes = thread.attributes.likes
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <ui-loader v-if="pending" class="flex-1 p-5 w-full flex items-center justify-center"/>
  <section v-else class="flex flex-col gap-3 px-5 flex-1 overflow-hidden">
    <template v-if="openedImg">
      <div @click="openedImg = null" class="bg-default/50 absolute top-0 left-0 h-screen w-screen z-10 p-5"/>
      <img class="z-20 absolute left-1/2 top-1/2 w-[calc(100vw-2.250rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
           :src="openedImg" alt="Image opened">
    </template>
    <article class="flex align-baseline justify-start gap-4 rounded-3xl">
      <NuxtLink class="contents" :to="{ name: 'profile-id', params: { id: data.attributes.author.data.id } }">
        <img class="w-10 h-10 rounded-xl object-cover shadow-custom-light-gray shadow-md"
             :src="data.attributes.author.data.attributes.avatar_url" alt="Photo de profil">
      </NuxtLink>
      <div class="flex gap-2 items-center w-full">
        <div class="w-full">
          <div class="flex items-center justify-between">
            <NuxtLink :to="{ name: 'profile-id', params: { id: data.attributes.author.data.id } }"
                      class="text-sm font-bold">{{ data.attributes.author.data.attributes.firstname }}
              {{ data.attributes.author.data.attributes.lastname }}
            </NuxtLink>
            <small class="text-light-gray font-medium">{{
                $dayjs(data.attributes.createdAt).fromNow()
              }}</small>
          </div>
          <p class="text-xs text-light-gray font-medium mt-1">{{
              data.attributes.author.data.attributes.job
            }}</p>
        </div>
      </div>
    </article>
    <div class="rounded-3xl bg-custom-purple shadow-custom-light-gray shadow-sm p-4">
      <div class="flex items-center justify-between font-medium mb-1">
        <small class="inline-flex text-xs items-center gap-2 text-white fill-white opacity-60">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/>
          </svg>
          Question
        </small>
        <div class="text-xs text-white flex items-center justify-end gap-3">
          <p @click="handleLike" class="flex items-center justify-start gap-1">
            <svg :class="iLiked ? 'fill-custom-pink' : 'fill-white'" class="flex items-center justify-center w-5 h-5"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
            </svg>
            {{ data.attributes.likes.data.length }}
          </p>
          <p class="flex items-center justify-start gap-1">
            <svg class="flex items-center justify-center w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clip-rule="evenodd"/>
            </svg>
            {{ data.attributes.answers.data.length }}
          </p>
        </div>
      </div>
      <p :class="more ? 'line-clamp-none' : 'line-clamp-2'" class="font-medium text-sm text-white text-ellipsis"
         v-html="data.attributes.content"/>
      <div v-if="more && false" class="grid grid-cols-7 gap-1 mt-3">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
        <img @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document"
             alt="Document">
      </div>
      <small v-if="data.attributes.content.length > 80" class="font-semibold block text-white mt-1"
             @click="more = !more">Lire {{ more ? 'moins' : 'tout' }}</small>
    </div>
    <div class="relative">
      <textarea v-model="answer" @submit="onSubmit" type="text" rows="1" placeholder="Répondre"
                class="h-full resize-none font-medium text-sm w-full py-2 px-5 pr-10 caret-custom-purple rounded-2xl border border-solid border-white focus:border-custom-purple bg-custom-light-gray outline-none"></textarea>
      <div v-if="answer !== ''" @click="onSubmit"
           class="absolute top-1/2 right-3 -translate-y-1/2 bg-custom-purple rounded-full">
        <svg class="w-6 h-6 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>

    <div class="flex flex-col flex-1 h-0">
      <div class="flex items-center justify-between">
        <h2 class="font-bold mb-3 mt-2">Réponses</h2>
        <svg class="w-5 h-5 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="currentColor">
          <path
              d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"/>
        </svg>
      </div>
      <div ref="container" class="flex flex-col gap-3 flex-1 overflow-auto snap-y">
        <p v-if="!data.attributes.answers.data.length" class="text-center font-medium text-sm">Aucune réponse
          pour le moment</p>
        <ui-answer v-else :answer="answer" v-for="answer in data.attributes.answers.data" :key="answer.id"
                   class="last:mb-5"/>
      </div>
    </div>
  </section>
</template>
