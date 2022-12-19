// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Community'
        }
    },
    modules: ['@kevinmarrec/nuxt-pwa'],
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
            description: 'Application de type réseau social d\'entraide entre étudiants',
            lang: 'fr',
            theme_color: '#EFF0F4',
            useWebmanifestExtension: false
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
