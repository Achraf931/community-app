<script setup lang="ts">
const { $dayjs } = useNuxtApp();
</script>

<template>
    <header id="header" class="p-5">
        <label for="search" class="relative flex items-center justify-start gap-4 rounded-full w-full bg-white shadow-sm">
            <svg  class="w-5 h-5 absolute left-5 top-1/2 pointer-events-none" style="transform: translateY(-50%)" width="30" height="30" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/></svg>
            <input id="search" class="p-4 pl-14 w-full rounded-full outline-none" type="search" placeholder="Taper votre question">
        </label>

        <h2 class="font-semibold text-xl mt-10 mb-4">Besoin d'aide ?</h2>
        <div class="w-full flex items-center justify-between gap-4">
            <article>
                <div class="flex items-center justify-center w-16 h-16 shadow-sm rounded-full object-cover bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z"/></svg>
                </div>
                <p class="text-xs text-center mt-2 text-light-gray">Devoirs</p>
            </article>
            <article>
                <div class="flex items-center justify-center w-16 h-16 shadow-sm rounded-full object-cover bg-white">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.178 4c-.914-1.493-2.944-3-6.178-3v-1c4.011 0 6.415 2.11 7.314 4h6.159l10.527 10.625-9.375 9.375-10.625-10.581v-6.242l-.282-.128c-1.043-.476-2.226-1.015-3.718-1.015v-1c1.641 0 2.943.564 4 1.044v-2.078h2.178zm10.944 9.109c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.405-7.109c-.051.445-.215.83-.49 1.114-.387.398-.797.57-1.227.599.008.932.766 1.685 1.699 1.685.938 0 1.699-.761 1.699-1.699 0-.932-.751-1.69-1.681-1.699z"/></svg>
                </div>
                <p class="text-xs text-center mt-2 text-light-gray">Bon plans</p>
            </article>
            <article>
                <div class="flex items-center justify-center w-16 h-16 shadow-sm rounded-full object-cover bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"/></svg>
                </div>
                <p class="text-xs text-center mt-2 text-light-gray">Groupes</p>
            </article>
            <article>
                <div class="flex items-center justify-center w-16 h-16 shadow-sm rounded-full object-cover bg-white">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z"/></svg>
                </div>
                <p class="text-xs text-center mt-2 text-light-gray">Jobs</p>
            </article>
        </div>
    </header>
    <section id="content" class="flex flex-col flex-1 overflow-hidden gap-5 p-5">
        <div class="flex items-center justify-between mb-4">
            <h2 class="font-semibold text-xl">Suggestions pour vous</h2>
            <small class="text-light-gray">Tout voir</small>
        </div>

        <article class="flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
            <img class="w-10 h-10 rounded-full object-cover shadow-md" src="https://pm1.narvii.com/6538/ab1e252b9b45b9e1bb64a2a60a3d5dc3250357ec_00.jpg" alt="Photo de profil">
            <div class="flex gap-2 items-center w-full">
                <div class="w-full">
                    <div class="flex items-center justify-between">
                        <p class="text-base font-medium">Camille</p>
                        <small class="text-light-gray">201 discussions</small>
                    </div>
                    <p class="text-xs text-light-gray mt-2 mb-4">Art & Design</p>
                    <p class="font-medium">Comment créer un design simple et épuré ?</p>
                </div>
            </div>
        </article>

        <article class="flex align-baseline justify-start gap-4 rounded-3xl bg-white shadow-sm p-4">
            <img class="w-10 h-10 rounded-full object-cover shadow-md" src="https://pm1.narvii.com/6538/ab1e252b9b45b9e1bb64a2a60a3d5dc3250357ec_00.jpg" alt="Photo de profil">
            <div class="flex gap-2 items-center w-full">
                <div class="w-full">
                    <div class="flex items-center justify-between">
                        <p class="text-base font-medium">Camille</p>
                        <small class="text-light-gray">201 discussions</small>
                    </div>
                    <p class="text-xs text-light-gray mt-2 mb-4">Art & Design</p>
                    <p class="font-medium">Comment créer un design simple et épuré ?</p>
                </div>
            </div>
        </article>

        <div class="absolute bottom-0 left-0 bg-gradient-to-t from-custom-light-gray h-72 w-full"></div>
    </section>
</template>
