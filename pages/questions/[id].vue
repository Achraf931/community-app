<script setup>
definePageMeta({
    layout: 'questions'
})
const { $dayjs } = useNuxtApp(),
    pending = ref(true),
    route = useRoute(),
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
            <article class="flex align-baseline justify-start gap-4 rounded-3xl shadow-sm pt-4">
                <img v-if="data.avatar" class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                <div class="flex gap-2 items-center w-full">
                    <div class="w-full">
                        <div class="flex items-center justify-between">
                            <p class="text-base font-medium">{{ data.author }}</p>
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
                <p class="font-medium text-sm">{{ data.content }}</p>
                <!--          <img class="mt-3 rounded-3xl object-cover" :src="data.document" alt="Document">-->
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
                    <article
                        class="snap-start relative flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                        <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                        <div class="flex gap-2 items-center w-full text-sm">
                            <div class="w-full">
                                <div class="flex items-center justify-between">
                                    <p class="text-base font-medium">{{ data.author }}</p>
                                    <small class="flex items-center justify-center gap-1.5 font-medium text-custom-purple">
                                        <svg class="w-3 h-3 fill-custom-purple stroke-custom-purple"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/>
                                        </svg>
                                        {{
                                            (new Intl.NumberFormat('fr-FR', {
                                                notation: 'compact',
                                                compactDisplay: 'short'
                                            }).format(1223)).replace('&nbsp;', '')
                                        }}
                                    </small>
                                </div>
                                <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                                <p class="font-medium" v-html="data.content"/>
                            </div>
                        </div>
                        <p class="absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 px-10 w-max flex items-center justify-center bg-green-400 rounded-3xl text-white font-medium text-xs shadow-md">
                            Réponse la plus pertinente</p>
                    </article>
                    <article v-for="index in 6" :key="index"
                             class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                        <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                        <div class="flex gap-2 items-center w-full text-sm">
                            <div class="w-full">
                                <div class="flex items-center justify-between">
                                    <p class="text-base font-medium">{{ data.author }}</p>
                                    <small class="flex items-center justify-center gap-1.5 font-medium text-light-gray">
                                        <svg class="w-3 h-3 fill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" viewBox="0 0 24 24">
                                            <path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/>
                                        </svg>
                                        {{
                                            (new Intl.NumberFormat('fr-FR', {
                                                notation: 'compact',
                                                compactDisplay: 'short'
                                            }).format(637)).replace('&nbsp;', '')
                                        }}
                                    </small>
                                </div>
                                <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                                <p class="font-medium" v-html="data.content"/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
    </section>
</template>