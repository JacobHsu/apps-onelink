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
          <span> Add AI </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('education')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Education </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('finance')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Finance </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('news')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add News </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('productivity')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Productivity </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('health')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Health </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('tools')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Tools </span>
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
</script>
