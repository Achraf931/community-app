<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
})

const strapi = useStrapi(),
    user = useStrapiUser(),
    commentUpdated = ref(props.comment),
    iLiked = computed(() => {
      return !!commentUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id).length
    })
const likeComment = async () => {
  try {
    const liked = commentUpdated.value.attributes.likes.data.filter(like => like.attributes.author.data.id === user.value.id)
    if (!!liked.length) {
      commentUpdated.value.attributes.likes.data = [...commentUpdated.value.attributes.likes.data.filter(like => like.id !== liked[0].id)]
      await strapi.delete('likes', liked[0].id)
    } else {
      await useApi(`likes?${
          useQueryString({
            populate: {
              comment: { populate: { likes: { populate: '*' }, author: true } },
              author: true
            }
          })
      }`, {
        method: 'POST',
        body: {
          data: {
            comment: props.comment.id,
            author: user.value.id
          }
        }
      }).then(({ data }) => commentUpdated.value.attributes.likes = data.value.data.attributes.comment.data.attributes.likes)
    }
  } catch (error) {
    console.log(error)
  }
}

props.comment.attributes.content = props.comment.attributes.content.replace(/(https?:\/\/\S+)/g, (url) => {
  return `<a href="${url}" target="_blank" class="text-custom-purple font-bold">Voir le lien</a>`
})
</script>
<template>
  <div class="text-xs font-medium w-full">
    <div class="flex items-center justify-start gap-2 font-semibold">
      <img class="rounded-md w-5 h-5" :src="comment.attributes.author.data.attributes.avatar_url" alt="">
      <p>{{ comment.attributes.author.data.attributes.firstname }} {{
          comment.attributes.author.data.attributes.lastname
        }}</p>
      <svg @click="likeComment" :class="iLiked ? 'fill-custom-pink' : 'fill-light-gray'" class="w-3 h-3 ml-auto" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
      </svg>
    </div>
    <p class="ml-7 text-light-gray">{{ comment.attributes.content }}</p>
  </div>
</template>
