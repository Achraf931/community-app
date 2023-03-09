// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Community'
        }
    },
    modules: [
        '@kevinmarrec/nuxt-pwa',
        '@nuxtjs/strapi',
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
    pwa: {
        meta: {
            // Generate splash screens for iOS
            mobileAppIOS: true,
        },
        workbox: {
            enabled: true
        },
        manifest: {
            name: 'Community',
            description: 'Réseau social d\'entraide pour étudiants.',
            lang: 'fr',
            theme_color: '#1A1A1D',
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
