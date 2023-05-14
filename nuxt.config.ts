// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Community',
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { charset: 'utf-8' },
                { name: 'theme-color', content: '#F2F2F2' },
                { name: 'description', content: 'Réseau social d\'entraide pour étudiants.' }
            ]
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/strapi',
        '@pinia-plugin-persistedstate/nuxt',
        '@vite-pwa/nuxt'
    ],
    pwa: {
        manifest: {
            name: 'Community',
            short_name: 'Community',
            description: 'Réseau social d\'entraide pour étudiants.',
            lang: 'fr',
            start_url: '/onboarding',
            icons: [
                {
                    src: '/icons/icon-72x72.png',
                    sizes: '72x72',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-96x96.png',
                    sizes: '96x96',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-144x144.png',
                    sizes: '144x144',
                    type: 'image/png',
                    purpose: 'any'
                },
                {
                    src: '/icons/icon-152x152.png',
                    sizes: '152x152',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png',
                    purpose: 'maskable'
                },
                {
                    src: '/icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable'
                }
            ],
            theme_color: '#F2F2F2',
            background_color: '#F2F2F2'
        },
        devOptions: {
            enabled: true,
            type: 'module'
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
