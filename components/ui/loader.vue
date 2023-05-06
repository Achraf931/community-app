<template>
    <div class="flex-1 w-full flex items-center justify-center">
        <div class="lds-ripple inline-block relative w-20 h-20">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.lds-ripple div {
    @apply absolute border-solid border-4 border-custom-purple rounded-full opacity-100;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes lds-ripple {
    0% {
        @apply top-9 left-9 w-0 h-0 opacity-0;
    }
    4.9% {
        @apply top-9 left-9 w-0 h-0 opacity-0;
    }
    5% {
        @apply top-9 left-9 w-0 h-0 opacity-100;
    }
    100% {
        @apply top-0 left-0 w-[72px] h-[72px] opacity-0;
    }
}
</style>
<script setup lang="ts">
</script>