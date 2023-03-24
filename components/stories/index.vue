<template>
  <div class="w-full flex gap-4 p-3">
    <article>
      <div class="w-16 h-16 p-0.5 border border-solid border-mid-gray rounded-full">
        <svg class="w-full h-full flex items-center justify-center p-2.5 bg-mid-gray rounded-full" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
      </div>
      <p class="text-xs text-custom-white text-center font-medium mt-0.5">Votre story</p>
    </article>
    <StoriesStory />
    <StoriesStory :author="{ name: 'eren', image: 'https://i.ytimg.com/vi/3otIYBgX1Tg/maxresdefault.jpg' }" image="https://i.ytimg.com/vi/3otIYBgX1Tg/maxresdefault.jpg" />
    <StoriesStory :author="{ name: 'bob', image: 'https://tetu.com/wp-content/uploads/2020/06/spongebob.jpg' }" image="https://tetu.com/wp-content/uploads/2020/06/spongebob.jpg" />
  </div>
</template>