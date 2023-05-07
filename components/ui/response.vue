<script setup>
const open = ref(false)
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  })
</script>
<template>
  <article
    class="snap-start relative flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
    <img class="w-10 h-10 rounded-full object-cover shadow-md" :src="props.data.avatar" alt="Photo de profil">
    <div class="flex gap-2 items-center w-full">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <p class="text-base font-medium">{{ props.data.author }}</p>
          <small :class="first ? 'text-custom-purple fill-custom-purple stroke-custom-purple' : 'text-light-gray fill-light-gray stroke-light-gray'" class="flex items-center justify-center gap-1.5 font-medium">
            <svg class="w-3 h-3"
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
        <p class="text-xs text-light-gray mt-1 mb-4">{{ props.data.job }}</p>
        <p :class="open ? 'line-clamp-none' : 'line-clamp-2'" class="content font-medium text-ellipsis">{{ props.data.content }}</p>
        <small class="font-semibold text-custom-purple" @click="open = !open">Lire {{ open ? 'moins' : 'tout' }}</small>
      </div>
    </div>
    <p v-if="first" class="absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 px-10 w-max flex items-center justify-center bg-green-400 rounded-3xl text-white font-medium text-xs shadow-md">
      Réponse la plus pertinente</p>
  </article>
</template>
