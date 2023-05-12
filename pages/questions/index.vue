<script setup>
definePageMeta({
    layout: 'questions',
    middleware: 'auth'
})
const pending = ref(true),
    { data } = useFetch('https://64566c612e41ccf1691ca819.mockapi.io/api/questions', {
        onResponse({ response }) {
            pending.value = false
            return response
        }
    })
</script>
<template>
    <ui-loader v-if="pending" class="flex-1 p-5 w-full flex items-center justify-center"/>
    <template v-else>
        <ui-search :data="data" />
        <div class="flex items-center justify-between mb-4 px-5">
            <h2 class="font-semibold text-xl">Questions du moment</h2>
            <svg class="w-5 h-5 fill-light-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
        </div>
        <section class="flex flex-col gap-5 p-5 flex-1 overflow-auto snap-y">
            <NuxtLink :to="{ name: 'questions-id', params: { id: question.id } }" v-for="question in data"
                      :key="question.id"
                      class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                <div class="flex flex-col justify-between min-w-max text-xs font-medium">
                    <NuxtLink class="contents" :to="{ name: 'profile-id', params: { id: question.user_id } }">
                        <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="question.avatar"
                             alt="Photo de profil">
                    </NuxtLink>
                    <div>
                        <p class="flex items-center justify-start text-light-gray fill-light-gray gap-1">
                            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clip-rule="evenodd" />
                            </svg>
                            {{ question.responses }}
                        </p>
                        <p class="flex items-center justify-start text-light-gray fill-light-gray gap-1">
                            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            {{ question.likes }}
                        </p>
                    </div>
                </div>
                <div class="flex gap-2 items-center w-full">
                    <div class="w-full">
                        <div class="flex items-center justify-between">
                            <NuxtLink :to="{ name: 'profile-id', params: { id: question.user_id } }" class="text-base font-medium">{{ question.author }}</NuxtLink>
                            <small class="text-light-gray font-medium capitalize">{{ question.school }}</small>
                        </div>
                        <p class="text-xs text-light-gray mb-4">{{ question.job }}</p>
                        <p class="font-medium" v-html="question.content"/>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </template>
</template>
