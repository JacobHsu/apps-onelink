<template>
  <Suspense>
    <template #default>
      <main class="w-full h-full max-w-lg p-4 pt-12 mx-auto space-y-8 bg-white">
        <div class="text-center">
          <div
            v-if="acc.i"
            class="w-20 h-20 mx-auto overflow-hidden rounded-full ring ring-slate-200"
          >
            <img :src="acc.i" alt="name" class="object-cover w-full h-full" />
          </div>
          <h1 v-if="acc.n" class="mt-4 text-2xl font-bold text-slate-800">
            {{ acc.n }}
          </h1>
          <p v-if="acc.d" class="mt-2 text-sm text-slate-600">
            {{ acc.d }}
          </p>
        </div>
        <div
          v-if="!allSocialLinksAreEmpty"
          class="flex flex-wrap items-center justify-center"
        >
          <span v-for="(link, index) in socialLinks" :key="index" class="p-1">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              <img :src="link.img" alt="name" class="w-16 h-16 rounded-lg" />
            </a>
          </span>
          <span v-if="acc.gh" class="p-1">
            <a :href="acc.gh" target="_blank" rel="noopener | noreferrer">
              <icon name="ph:github-logo-duotone" class="w-6 h-6" />
            </a>
          </span>
        </div>
        <ul class="space-y-2">
          <li v-for="(link, id) in acc.ls" :key="id">
            <nuxt-link :to="link.u" target="_blank" v-if="link.l && link.u">
              <dt
                class="flex items-center p-1 -m-1 space-x-2 rounded-xl hover:bg-slate-100 bg-slate-50"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg text-slate-500"
                >
                  <img v-if="link.i" :src="link.i" alt="icon" class="w-5 h-5" />
                  <icon v-else name="ph:link-simple" class="w-5 h-5" />
                </div>
                <div class="flex-grow w-full min-w-0">
                  <p class="text-sm font-medium leading-6 text-gray-900">
                    {{ link.l }}
                  </p>
                </div>
              </dt>
            </nuxt-link>
          </li>
        </ul>
      </main>
    </template>
    <template #fallback>
      <div class="text-center">
        <p>Loading...</p>
      </div>
    </template>
  </Suspense>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const socialLinks = computed(() => {
  return (props.acc.apps || []).map(app => ({
    url: app.url,
    img: app.logo
  })).filter(link => link.url);
});

const allSocialLinksAreEmpty = computed(() => {
  return socialLinks.value.length === 0;
});
</script>
<style scoped></style>
