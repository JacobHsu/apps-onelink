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
      <span v-if="acc.one" class="p-1">
        <a :href="acc.one" target="_blank" rel="noopener | noreferrer">
           <img :src="acc.app1" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.two" class="p-1">
        <a :href="acc.two" target="_blank" rel="noopener | noreferrer">
          <img :src="acc.app2" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.three" class="p-1">
        <a :href="acc.three" target="_blank" rel="noopener | noreferrer">
          <img :src="acc.app3" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.four" class="p-1">
        <a :href="acc.four" target="_blank" rel="noopener | noreferrer">
          <img :src="acc.app4" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.five" class="p-1">
        <a :href="acc.five" target="_blank" rel="noopener | noreferrer">
          <img :src="acc.app5" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.six" class="p-1">
        <a :href="acc.six" target="_blank" rel="noopener | noreferrer">
          <img :src="acc.app6" alt="name" class="w-16 h-16 rounded-lg" />
        </a>
      </span>
      <span v-if="acc.w" class="p-1">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:whatsapp-logo-duotone" class="w-6 h-6" />
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:youtube-logo-duotone" class="w-6 h-6" />
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:envelope-duotone" class="w-6 h-6" />
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

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.one &&
    !props.acc.two &&
    !props.acc.three &&
    !props.acc.m &&
    !props.acc.five &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.four &&
    !props.acc.six
  );
});
</script>
<style scoped></style>
