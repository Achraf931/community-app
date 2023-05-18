import { defineStore } from 'pinia'
export const useThreadStore = defineStore('ThreadStore', {
    state: () => {
        return {
            threads: []
        }
    },
    getters: {
        getThreads() {
            return toRaw(this.threads)
        }
    },
    actions: {
        async setThreads({ threads }) {
            this.threads = threads
        }
    },
    persist: true
})
