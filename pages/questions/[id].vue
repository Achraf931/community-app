<script setup>
definePageMeta({
    layout: 'questions'
})
const { $dayjs } = useNuxtApp(),
    pending = ref(true),
    route = useRoute(),
    openedImg = ref(null),
    { data } = useFetch(`https://64566c612e41ccf1691ca819.mockapi.io/api/questions/${route.params.id}`, {
        onResponse({ response }) {
            pending.value = false
            return response
        }
    })
</script>
<template>
    <ui-loader v-if="pending" class="flex-1 p-5 w-full flex items-center justify-center"/>
    <section v-else class="flex flex-col gap-3 p-5 flex-1 overflow-hidden">
        <template v-if="openedImg">
            <div @click="openedImg = null" class="bg-default/50 absolute top-0 left-0 h-screen w-screen z-10 p-5"/>
            <img class="z-20 absolute left-1/2 top-1/2 w-[calc(100vw-2.250rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl" :src="openedImg" alt="Image opened">
        </template>
        <article class="flex align-baseline justify-start gap-4 rounded-3xl pt-4">
                <NuxtLink class="contents" :to="{ name: 'profile-id', params: { id: data.user_id } }">
                    <img v-if="data.avatar" class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                </NuxtLink>
                <div class="flex gap-2 items-center w-full">
                    <div class="w-full">
                        <div class="flex items-center justify-between">
                            <NuxtLink :to="{ name: 'profile-id', params: { id: data.user_id } }" class="text-base font-medium">{{ data.author }}</NuxtLink>
                            <small class="text-light-gray">{{ $dayjs(data.createdAt).locale('fr').fromNow() }}</small>
                        </div>
                        <p class="text-xs text-light-gray mt-1">{{ data.job }}</p>
                    </div>
                </div>
            </article>
            <div class="rounded-3xl bg-white shadow-sm p-4">
                <small class="inline-flex items-center gap-2 text-custom-purple fill-custom-purple font-medium">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/>
                    </svg>
                    Question
                </small>
                <p class="font-medium">{{ data.content }}</p>
                <div class="grid grid-cols-7 gap-1 mt-3">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                    <img v-if="data.id == 1" @click="openedImg = data.document" class="w-10 h-10 rounded-md object-cover" :src="data.document" alt="Document">
                </div>
            </div>

            <div class="flex flex-col flex-1 h-0">
                <div class="flex items-center justify-between">
                    <h2 class="font-semibold text-xl mt-5 mb-4">Réponses</h2>
                    <svg class="w-5 h-5" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                         stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m15.344 17.778c0-.414-.336-.75-.75-.75h-5.16c-.414 0-.75.336-.75.75s.336.75.75.75h5.16c.414 0 .75-.336.75-.75zm2.206-4c0-.414-.336-.75-.75-.75h-9.596c-.414 0-.75.336-.75.75s.336.75.75.75h9.596c.414 0 .75-.336.75-.75zm2.45-4c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                              fill-rule="nonzero"/>
                    </svg>
                </div>
                <div class="flex flex-col gap-5 flex-1 overflow-auto snap-y">
                    <ui-response :data="data" :first="true" />
                    <ui-response :data="data" v-for="index in 6" :key="index" />
                </div>
            </div>
    </section>
</template>
