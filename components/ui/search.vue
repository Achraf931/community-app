<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: []
    }
})
const query = ref(''),
    { find } = useStrapi(),
    searchResults = ref([]),
    searchMode = ref(false),
    isTyping = ref(false),
    data = ref([])
const search = useDebounce(() => {
    if (query.value.length > 0) {
        searchResults.value = data.value.filter(thread => thread.attributes.content.toLowerCase().includes(query.value.toLowerCase()))
    } else {
        searchResults.value = []
    }
    isTyping.value = false
})
const searching = () => {
    isTyping.value = true
    search()
}

const openSearch = async () => {
    searchMode.value = true
    const threads = await find('threads', { populate: { answers: { count: true } } })
    data.value = threads.data
}

const closeSearch = () => {
    searchMode.value = false
    query.value = ''
    searchResults.value = []
    isTyping.value = false
}
const matchingText = (elem) => {
    if(!query.value) return elem
    return elem.replace(new RegExp(query.value, "gi"), match => {
        return `<span class="font-bold text-custom-purple">${match}</span>`
    })
}
</script>

<template>
    <div v-if="searchMode" @click="closeSearch" class="absolute backdrop-blur-sm z-20 top-0 left-0 w-screen h-screen bg-default/50"></div>
    <div>
        <div @click="openSearch" class="flex items-center justify-center p-2.5 w-10 h-10 bg-white shadow-sm rounded-full">
            <svg class="w-5 h-5 fill-light-gray stroke-light-gray" stroke-width=".5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
            </svg>
        </div>

        <div v-if="searchMode" class="absolute z-20 left-0 pt-0 p-5 max-h-[390px] w-full">
            <label for="search"
                   class="relative flex items-center justify-start gap-4 rounded-full w-full bg-white shadow-sm mb-3">
                <svg class="w-5 h-5 fill-light-gray stroke-light-gray absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" stroke-width=".5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
                <input id="search" :autocomplete="false" :class="{ 'z-20': searchMode }" class="caret-custom-purple p-4 pl-14 w-full rounded-full outline-none" type="search"
                       placeholder="Taper votre question" @input="searching" v-model="query">
            </label>
            <p v-if="query !== '' && !isTyping && searchResults.length === 0" class="rounded-full bg-white text-center p-4 font-medium text-sm">Aucun résultat</p>
            <div v-else class="rounded-3xl max-h-[390px] overflow-auto snap-y">
                <NuxtLink :to="{ name: 'threads-id', params: { id: result.id } }" v-for="result in searchResults" :key="result.id" class="snap-start flex gap-3 items-center justify-between bg-white first:rounded-t-3xl last:rounded-b-3xl p-5 text-sm border-b border-solid border-custom-purple">
                    <p class="font-medium" v-html="matchingText(result.attributes.content)" />
                    <div class="text-center fill-custom-purple text-custom-purple">
                        <svg class="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        <span class="text-xs">0</span>
                        <svg class="w-3 h-3 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
                        </svg>

                        <span class="text-xs">{{ result.attributes.answers.data.attributes.count }}</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
