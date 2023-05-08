<script setup>
definePageMeta({
    layout: 'questions'
})
const pending = ref(true),
    query = ref(''),
    searchResults = ref([]),
    searchMode = ref(false),
    isTyping = ref(false),
    { data } = useFetch('https://64566c612e41ccf1691ca819.mockapi.io/api/questions', {
        onResponse({ response }) {
            pending.value = false
            return response
        }
    })
const search = useDebounce(() => {
    if (query.value.length > 0) {
        searchResults.value = data.value.filter(question => question.content.toLowerCase().includes(query.value.toLowerCase()))
    } else {
        searchResults.value = []
    }
    isTyping.value = false
})

const searching = () => {
    isTyping.value = true
    search()
}

const closeSearch = () => {
    searchMode.value = false
    query.value = ''
    searchResults.value = []
    isTyping.value = false
}
</script>
<template>
  <ui-loader v-if="pending" class="flex-1 p-5 w-full flex items-center justify-center"/>
  <section v-else class="flex-1 p-5">
    <div v-if="searchMode" @click="closeSearch" class="absolute top-0 left-0 w-screen h-screen bg-default/50"></div>
    <div class="relative pb-5">
      <label for="search"
             class="relative flex items-center justify-start gap-4 rounded-full w-full bg-white shadow-sm">
        <svg class="w-5 h-5 fill-light-gray absolute left-5 top-1/2 pointer-events-none"
             style="transform: translateY(-50%)" width="30" height="30" stroke-linejoin="round"
             stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/>
        </svg>
        <input id="search" autocomplete="false" :class="{ 'z-10': searchMode }" class="p-4 pl-14 w-full rounded-full outline-none" type="search"
               placeholder="Taper votre question" @input="searching" v-model="query" @focus="searchMode = true">
      </label>

      <div class="absolute top-full left-0 px-5 py-0 max-h-[390px] w-full">
        <p v-if="query !== '' && !isTyping && searchResults.length === 0" class="rounded-full bg-white text-center p-4 font-medium text-sm">Aucun résultat</p>
        <div v-else class="rounded-3xl max-h-[390px] overflow-auto snap-y">
          <NuxtLink :to="{ name: 'questions-id', params: { id: result.id } }" v-for="result in searchResults" :key="result.id" class="snap-start flex gap-3 items-center justify-between bg-white first:rounded-t-3xl last:rounded-b-3xl p-5 text-sm border-b border-solid border-custom-purple">
            <p class="font-medium">{{ result.content }}</p>
            <div class="text-center fill-custom-purple text-custom-purple">
              <svg class="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"/></svg>
              <span class="text-xs">{{ result.likes }}</span>
              <svg class="w-3 h-3 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/>
              </svg>
              <span class="text-xs">{{ result.responses }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <ui-ad />
  </section>
</template>
