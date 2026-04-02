export default ({
    app: {
        baseURL: process.env.BASE_URL ?? '/',
        head: {
            htmlAttrs: { lang: 'zh-TW' },
            title: 'Onelink',
            meta: [
                { name: 'description', content: 'Create your personal link-in-bio page' },
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    compatibilityDate: '2024-12-23',
})
