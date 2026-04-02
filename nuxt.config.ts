export default ({
    app: {
        baseURL: process.env.BASE_URL ?? '/',
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
