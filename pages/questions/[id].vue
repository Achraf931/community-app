<script setup>
  definePageMeta({
      layout: 'questions'
  })
  const { $dayjs } = useNuxtApp(),
      route = useRoute(),
      { data } = useFetch(`https://64566c612e41ccf1691ca819.mockapi.io/api/questions/${route.params.id}`)
</script>
<template>
  <section v-if="data" class="flex flex-col gap-3 p-5 flex-1 overflow-hidden">
      <article class="flex align-baseline justify-start gap-4 rounded-3xl shadow-sm pt-4">
          <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
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
      <div class="rounded-3xl bg-white shadow-sm p-4 inline-flex items-center justify-center gap-2 text-sm font-medium">
          <svg class="w-5 h-5 fill-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg>
          Une réponse a été validée
      </div>
      <div class="rounded-3xl bg-white shadow-sm p-4">
          <small class="inline-flex items-center gap-2 text-light-gray fill-light-gray">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"/></svg>
              Question
          </small>
          <p class="font-medium text-sm">{{ data.content }}</p>
<!--          <img class="mt-3 rounded-3xl object-cover" :src="data.document" alt="Document">-->
      </div>

      <div class="flex flex-col flex-1 h-0">
          <h2 class="font-semibold text-xl mt-5 mb-4">Réponses</h2>
          <div class="flex flex-col gap-5 flex-1 overflow-auto snap-y">
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-custom-purple stroke-custom-purple" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(1223)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stfill-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(637)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(123)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(123)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(123)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(123)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
              <article class="snap-start flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
                  <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="data.avatar" alt="Photo de profil">
                  <div class="flex gap-2 items-center w-full text-sm">
                      <div class="w-full">
                          <div class="flex items-center justify-between">
                              <p class="text-base font-medium">{{ data.author }}</p>
                              <small class="flex items-center justify-center gap-1.5 font-medium">
                                  <svg class="w-3 h-3 fill-light-gray stroke-light-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
                                  {{ (new Intl.NumberFormat('fr-FR', { notation: 'compact', compactDisplay: 'short' }).format(123)).replace('&nbsp;', '') }}
                              </small>
                          </div>
                          <p class="text-xs text-light-gray mt-1 mb-4">{{ data.job }}</p>
                          <p class="font-medium" v-html="data.content" />
                      </div>
                  </div>
              </article>
          </div>
      </div>
  </section>
</template>