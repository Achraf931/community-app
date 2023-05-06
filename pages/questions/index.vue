<script setup>
definePageMeta({
    layout: 'questions'
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
        <div class="p-5">
            <label for="search"
                   class="relative flex items-center justify-start gap-4 rounded-full w-full bg-white shadow-sm">
                <svg class="w-5 h-5 fill-light-gray absolute left-5 top-1/2 pointer-events-none"
                     style="transform: translateY(-50%)" width="30" height="30" stroke-linejoin="round"
                     stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/>
                </svg>
                <input id="search" class="p-4 pl-14 w-full rounded-full outline-none" type="search"
                       placeholder="Taper votre question">
            </label>
        </div>
        <div class="flex items-center justify-between mb-4 px-5">
            <h2 class="font-semibold text-xl">Meilleurs réponses</h2>
            <svg class="w-5 h-5" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15.344 17.778c0-.414-.336-.75-.75-.75h-5.16c-.414 0-.75.336-.75.75s.336.75.75.75h5.16c.414 0 .75-.336.75-.75zm2.206-4c0-.414-.336-.75-.75-.75h-9.596c-.414 0-.75.336-.75.75s.336.75.75.75h9.596c.414 0 .75-.336.75-.75zm2.45-4c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                      fill-rule="nonzero"/>
            </svg>
        </div>
        <section class="flex flex-col gap-5 p-5 flex-1 overflow-auto snap-y">
            <NuxtLink :to="{ name: 'questions-id', params: { id: question.id } }" v-for="question in data"
                      :key="question.id"
                      class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                <div class="flex flex-col justify-between">
                    <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="question.avatar"
                         alt="Photo de profil">
                    <small class="flex items-center justify-center gap-1.5 font-medium fill-light-gray text-light-gray">
                        {{ question.likes }}
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24">
                            <path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/>
                        </svg>
                    </small>
                </div>
                <div class="flex gap-2 items-center w-full">
                    <div class="w-full">
                        <div class="flex items-center justify-between">
                            <p class="text-base font-medium">{{ question.author }}</p>
                            <small class="text-light-gray font-medium">{{ question.responses }} réponses</small>
                        </div>
                        <p class="text-xs text-light-gray mt-1 mb-4">{{ question.job }}</p>
                        <p class="font-medium" v-html="question.content"/>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </template>
</template>
