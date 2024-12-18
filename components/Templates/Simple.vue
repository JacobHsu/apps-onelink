<template>
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
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const socialLinks = computed(() => {
  return [
    { url: props.acc.one, img: props.acc.app1 },
    { url: props.acc.two, img: props.acc.app2 },
    { url: props.acc.three, img: props.acc.app3 },
    { url: props.acc.four, img: props.acc.app4 },
    { url: props.acc.five, img: props.acc.app5 },
    { url: props.acc.six, img: props.acc.app6 },
    { url: props.acc.seven, img: props.acc.app7 },
    { url: props.acc.eight, img: props.acc.app8 },
    { url: props.acc.nine, img: props.acc.app9 },
    { url: props.acc.ten, img: props.acc.app10 },
  ].filter(link => link.url);
});

const allSocialLinksAreEmpty = computed(() => {
  return socialLinks.value.length === 0;
});
</script>
<style scoped></style>
