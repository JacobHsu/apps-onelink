<template>
  <base-form-section title="Apps Links" description="Some Apps links">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 px-4 py-5 bg-white sm:p-6">
        <div v-for="(app, index) in apps" :key="index">
          <label :for="'app-' + index" class="block text-sm font-medium text-gray-700">
            {{ app.name }}
          </label>
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <img :src="app.logo" class="w-5 h-5 rounded-full" v-if="app.logo" />
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" v-else />
            </span>
            <input
              type="text"
              :name="'app-' + index"
              :id="'app-' + index"
              :value="app.url"
              readonly
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps({
  apps: {
    type: Array,
    default: () => [],
  },
});
</script>
