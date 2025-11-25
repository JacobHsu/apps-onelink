<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="flex flex-col h-screen col-span-2 bg-slate-100">
      <div class="flex-1 p-8 overflow-y-auto">
        <app-form-profile v-model:name="data.n" v-model:desc="data.d" :image="data.i" />
        <app-form-hr />
        <app-form-social-links :apps="data.apps" />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="flex items-center bg-white border-t">
        <button
          @click="fillDemoData('ai')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>AI</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('education')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Language</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('finance')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Crypto</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('news')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Information</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('productivity')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Habit</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('health')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Fitness</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('tv')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>TV</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('tools')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span>Tools</span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
const { demoData } = useAppData();

const data = ref({
  n: "",
  d: "",
  i: "",
  apps: [],
  ls: [],
});

const fillDemoData = (type) => {
  data.value = demoData[type];
};

fillDemoData('ai');
</script>
