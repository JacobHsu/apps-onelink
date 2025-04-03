<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="flex flex-col h-screen col-span-2 bg-slate-100">
      <div class="flex-1 p-8 overflow-y-auto">
        <app-form-profile :name="data.n" :desc="data.d" :image="data.i" />
        <app-form-hr />
        <app-form-social-links v-bind="data" />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="flex items-center bg-white border-t">
        <button
          @click="fillDemoData('ai')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add AI data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('education')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Education data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('finance')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Finance data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('news')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add News data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('productivity')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Productivity data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="fillDemoData('health')"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add Health data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
import { educationData, productivityData, newsData, aiData, financeData, healthData } from "./data.js";

const data = ref({
  n: "",
  d: "",
  i: "",
  app1: "",
  app2: "",
  app3: "",
  app4: "",
  app5: "",
  app6: "",
  app7: "",
  app8: "",
  app9: "",
  app10: "",
  app11: "",
  app12: "",
  ls: [],
});

const demoData = {
  education: educationData,
  productivity: productivityData,
  news: newsData,
  ai: aiData,
  finance: financeData,
  health: healthData,
};
const fillDemoData = (type) => {
  data.value = demoData[type];
};
</script>
