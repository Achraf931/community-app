// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Community'
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@kevinmarrec/nuxt-pwa',
        '@pinia/nuxt',
        '@nuxtjs/strapi',
        '@pinia-plugin-persistedstate/nuxt'
    ],
    pwa: {
        icon: {
            source: '/images/icon.png'
        },
        meta: {
            mobileAppIOS: true,
            appleStatusBarStyle: 'black-translucent'
        },
        manifest: {
            name: 'Community',
            description: 'Réseau social d\'entraide pour étudiants.',
            lang: 'fr',
            icons: [{
                purpose: 'maskable',
                src: '/images/icon.png',
                type: 'image/png',
                sizes: '512x512'
            }],
            theme_color: '#F2F2F2'
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
