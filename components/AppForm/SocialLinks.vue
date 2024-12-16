<template>
  <base-form-section title="Apps Links" description="Add some Apps links">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 px-4 py-5 bg-white sm:p-6">
        <div v-for="app in apps" :key="app.id">
          <label :for="app.id" class="block text-sm font-medium text-gray-700">
            {{ app.label }}
          </label>
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              :name="app.id"
              :id="app.id"
              :value="app.value"
              @input="$emit('update:' + app.id, $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps([
  "app1",
  "app2",
  "app3",
  "app4",
  "app5",
  "app6",
  "app7",
  "app8",
  "app9",
]);

const apps = computed(() => [
  { id: "app1", label: "App 1", value: props.app1 },
  { id: "app2", label: "App 2", value: props.app2 },
  { id: "app3", label: "App 3", value: props.app3 },
  { id: "app4", label: "App 4", value: props.app4 },
  { id: "app5", label: "App 5", value: props.app5 },
  { id: "app6", label: "App 6", value: props.app6 },
  { id: "app7", label: "App 7", value: props.app7 },
  { id: "app8", label: "App 8", value: props.app8 },
  { id: "app9", label: "App 9", value: props.app9 },
]);
</script>
