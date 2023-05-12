import { defineStore } from 'pinia'
export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            jwt: null,
            user: null,
            loggedIn: false
        }
    },
    getters: {
        getUser() {
            return this.user
        }
    },
    actions: {
        async setUser({ jwt, user }) {
            this.jwt = jwt
            this.user = user
            this.loggedIn = true
        }
    },
    persist: true
})
