import { defineStore } from 'pinia'
export const useThreadStore = defineStore('ThreadStore', {
    state: () => {
        return {
            threads: []
        }
    },
    getters: {
        getThreads() {
            return this.threads
        }
    },
    actions: {
        async setThreads({ threads }) {
            this.threads = threads
        }
    },
    persist: true
})
