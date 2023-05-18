<script setup>
const props = defineProps({
  thread: {
    type: Object,
    required: true
  }
})

let counter = ref(0),
    strapi = useStrapi(),
    user = useStrapiUser(),
    threadUpdated = ref(props.thread),
    timer = ref(null),
    iLiked = computed(() => {
      return !!threadUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id).length
    }),
    router = useRouter()

const onClick = async () => {
  counter.value++

  if (counter.value === 1) {
    timer.value = setTimeout(() => {
      counter.value = 0
      router.push({ name: 'threads-id', params: { id: props.thread.id } })
    }, 300)

    return
  }

  clearTimeout(timer.value)
  counter.value = 0
  try {
    const liked = props.thread.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id)
    if (!!liked.length) {
      threadUpdated.value.attributes.likes.data = [...threadUpdated.value.attributes.likes.data.filter(like => like.id !== liked[0].id)]
      await strapi.delete('likes', liked[0].id)
    } else {
      await strapi.create('likes', {
        thread: props.thread.id,
        author: user.value.id
      })
      const { data: thread } = await strapi.findOne('threads', props.thread.id, { populate: { likes: { populate: '*' }, answers: { count: true }, author: true } })
      threadUpdated.value = thread
    }
  } catch (error) {
    console.log(error)
  }
}

props.thread.attributes.content = props.thread.attributes.content.replace(/(https?:\/\/\S+)/g, (url) => {
  return `<a href="${url}" target="_blank" class="text-custom-purple font-bold">Voir le lien</a>`
})
</script>
<template>
  <div @click.prevent="onClick"
       class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-custom-light-gray shadow-custom-light-gray shadow-md p-4">
    <div class="flex flex-col justify-between text-xs font-medium gap-2 min-w-[2.5rem]">
      <img class="w-10 h-10 rounded-xl object-cover shadow-custom-light-gray shadow-md" width="40" height="40"
           :src="props.thread.attributes.author.data.attributes.avatar_url" alt="Photo de profil">
      <div>
        <p class="flex items-center justify-start text-light-gray fill-light-gray gap-1">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clip-rule="evenodd"/>
          </svg>
          {{ props.thread.attributes.answers.data.attributes.count }}
        </p>
        <p :class="iLiked ? 'fill-custom-pink' : 'fill-light-gray'"
           class="flex items-center justify-start text-light-gray gap-1">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
          </svg>
          {{ threadUpdated.attributes.likes.data.length ? threadUpdated.attributes.likes.data.length : 0 }}
        </p>
      </div>
    </div>
    <div class="flex gap-2 items-center w-full">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <p class="text-sm font-bold">{{ props.thread.attributes.author.data.attributes.firstname }}
            {{ props.thread.attributes.author.data.attributes.lastname }}</p>
          <small class="text-xs text-light-gray font-medium">{{
              props.thread.attributes.author.data.attributes.school
            }}</small>
        </div>
        <p class="text-xs text-light-gray font-medium mb-4">{{ props.thread.attributes.author.data.attributes.job }}</p>
        <p class="text-sm font-medium" v-html="props.thread.attributes.content"/>
      </div>
    </div>
  </div>
</template>
