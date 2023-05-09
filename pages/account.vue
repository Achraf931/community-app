<script setup>
definePageMeta({
    layout: 'account'
})
</script>
<template>
  <section class="flex flex-col justify-between items-start gap-5 flex-1 p-5">
    <div>
      <p class="mb-3 font-medium text-sm">💻 Une description au pif, un genre de bio...</p>
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
          <svg class="text-xl" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/></svg>
          <p>Classe</p>
        </div>
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
      </div>
      <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
        <div class="flex items-center justify-start gap-3">
          <svg class="text-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>
          <p>Cours</p>
        </div>
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
      </div>
      <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 border-b border-solid border-custom-light-gray">
        <div class="flex items-center justify-start gap-3">
          <svg class="text-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z"/></svg>
          <p>Learning Plan</p>
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
      <div class="flex text-light-gray fill-light-gray items-center justify-between bg-white px-4 py-3.5 rounded-b-2xl">
        <div class="flex items-center justify-start gap-3">
          <svg class="text-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
          <p>Community</p>
        </div>
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
      </div>
    </div>
  </section>
</template>
