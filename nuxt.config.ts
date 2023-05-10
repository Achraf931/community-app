// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Community'
        }
    },
    modules: [
        '@nuxtjs/supabase',
        '@vueuse/nuxt',
        '@kevinmarrec/nuxt-pwa'
    ],
    pwa: {
        icon: {
            source: '/images/icon.png'
        },
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
