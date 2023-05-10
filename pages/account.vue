<script setup>
definePageMeta({
    layout: 'account'
})
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.value?.id)
      .single()
  const logout = async () => {
      try {
          let { error } = await supabase.auth.signOut()
          if (error) throw error
          user.value = null
      } catch (error) {
          alert(error.message)
      } finally {
          navigateTo({ name: 'login' })
      }
  }
</script>
<template>
  <main class="font-poppins text-default h-screen bg-custom-light-gray dark:bg-default flex flex-col align-top mx-auto">
    <header class="w-full rounded-xl flex items-center justify-between p-5 pb-0">
      <div class="flex items-center justify-between w-full gap-3">
        <div class="flex items-center justify-start gap-3">
          <img class="w-10 h-10 p-0.5 mx-auto rounded-full object-cover border border-solid border-custom-purple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs4NnmB39-e9lGrvN3GkdftbUyHCTS_7rf0lmhLbRxg&s" alt="Photo de profil">
          <div>
            <p class="font-bold text-xl">{{ data?.lastname }} {{ data?.firstname }}</p>
            <p class="text-xs text-light-gray">{{ data?.job }} <span v-if="data?.company">chez {{ data?.company }}</span></p>
          </div>
        </div>
      </div>
    </header>
    <section class="flex flex-col justify-between items-start gap-5 flex-1 p-5">
      <div>
        <p class="mb-3 font-medium text-sm">{{ data?.description }}</p>
        <div class="flex items-center justify-between gap-2">
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">56 followers</div>
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">536 following</div>
          <div class="rounded-full bg-custom-purple text-center px-4 py-2 text-xs text-white">21 questions</div>
        </div>
      </div>

      <div class="w-full">
        <h2 class="font-semibold text-xl mb-3">Membre de :</h2>
        <div class="flex items-center justify-start gap-2">
          <img class="rounded-md p-1.5 bg-white w-10 h-10 shadow-sm" src="https://sacfunded.net/s/sac-logo-black.png" alt="Groupe logo">
          <div>
            <h3 class="font-medium">Social Science</h3>
            <p class="text-sm text-light-gray">Meet them & Share your experience</p>
          </div>
        </div>
        <div class="flex items-center justify-start gap-2 mt-5">
          <img class="rounded-md p-1.5 bg-white w-10 h-10 shadow-sm" src="https://sacfunded.net/s/sac-logo-black.png" alt="Groupe logo">
          <div>
            <h3 class="font-medium">Human Economic</h3>
            <p class="text-sm text-light-gray">Meet them & Share your experience</p>
          </div>
        </div>
      </div>

      <div class="text-sm font-medium w-full shadow-sm">
        <h2 class="font-semibold text-xl mb-3">Mon suivi :</h2>
        <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 rounded-t-2xl border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.732 13h1.504s2.32-8.403 2.799-10.263c.156-.605.646-.738.965-.737.319.001.826.224.947.74.581 2.466 3.11 13.908 3.11 13.908s1.597-6.441 1.943-7.891c.101-.425.536-.757 1-.757.464 0 .865.343 1 .707.312.841 1.675 4.287 1.677 4.293h1.591c.346-.598.992-1 1.732-1 1.104 0 2 .896 2 2s-.896 2-2 2c-.741 0-1.388-.404-1.734-1.003-.939-.001-1.856 0-2.266.003-.503.004-.774-.289-.928-.629l-.852-2.128s-1.828 7.367-2.25 8.999c-.153.595-.646.762-.97.758-.324-.004-.847-.198-.976-.783-.549-2.487-2.081-9.369-3.123-14.053 0 0-1.555 5.764-1.936 7.099-.13.454-.431.731-.965.737h-2.268c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1z"/></svg>
            <p>Votre activité</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
        <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.546 1l5.454 6.986v15.014h-24v-15.014l5.477-6.986h13.069zm-5.546 14v-3h-2v3h-3l4 4 4-4h-3zm8.474-7l-3.906-5h-11.085l-3.951 5h18.942z"/></svg>
            <p>Enregistré</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
        <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
            <svg class="w-5 h-5" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
            <p>Favoris</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
        <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
          <div class="flex items-center justify-start gap-3">
            <svg class="text-xl" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 11.25c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-.537c-.151-.135-.228-.321-.228-.509 0-.375.304-.682.683-.682.162 0 .324.057.455.173l.746.665 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.307.684.682 0 .163-.059.328-.179.459l-2.116 2.313c-.134.147-.319.222-.504.222-.162 0-.325-.057-.455-.173zm11.772-2.711c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-1.613v.001c-.151-.135-.228-.322-.228-.509 0-.376.304-.682.683-.682.162 0 .324.057.455.173l.746.664 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.308.684.682 0 .164-.059.329-.179.46l-2.116 2.313c-.134.147-.319.221-.504.221-.162 0-.325-.057-.455-.173zm11.772-1.639c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75z" fill-rule="nonzero"/></svg>
            <p>Jobs</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
        <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5">
          <div class="flex items-center justify-start gap-3">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            <p>Paramètres</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
        <div @click.prevent="logout" class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 rounded-b-2xl">
          <div class="flex items-center justify-start gap-3">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 9v-4l8 7-8 7v-4h-8v-6h8zm2-7v2h12v16h-12v2h14v-20h-14z"/></svg>
            <p>Se déconnecter</p>
          </div>
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
      </div>
    </section>
    <ui-footer />
  </main>
</template>
