<template>
  <base-form-section
    title="Apps Links"
    description="Add some Apps links"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 px-4 py-5 bg-white sm:p-6">
        <div>
          <label for="app1" class="block text-sm font-medium text-gray-700"
            >App 1</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app1"
              id="app1"
              :value="app1"
              @input="$emit('update:app1', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app2" class="block text-sm font-medium text-gray-700"
            >App 2</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app2"
              id="app2"
              :value="app2"
              @input="$emit('update:app2', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app3" class="block text-sm font-medium text-gray-700"
            >App 3</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app3"
              id="app3"
              :value="app3"
              @input="$emit('update:app3', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app4" class="block text-sm font-medium text-gray-700"
            >App 4</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app4"
              id="app4"
              :value="app4"
              @input="$emit('update:app4', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app5" class="block text-sm font-medium text-gray-700"
            >App 5</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app5"
              id="app5"
              :value="app5"
              @input="$emit('update:app5', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app6" class="block text-sm font-medium text-gray-700"
            >App 6</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app6"
              id="app6"
              :value="app6"
              @input="$emit('update:app6', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app7" class="block text-sm font-medium text-gray-700"
            >App 7</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app7"
              id="app7"
              :value="app7"
              @input="$emit('update:app7', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="app8" class="block text-sm font-medium text-gray-700"
            >App 8</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:app-store-logo-fill" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="app8"
              id="app8"
              :value="app8"
              @input="$emit('update:app8', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="instagram" class="block text-sm font-medium text-gray-700"
            >Whatsapp</label
          >
          <div class="flex mt-1 rounded-md shadow-sm">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
            >
              <icon name="ph:whatsapp-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="whatsapp"
              id="whatsapp"
              :value="whatsapp"
              @input="$emit('update:whatsapp', $event.target.value)"
              class="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="+9190000000000"
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
  "whatsapp",
]);
</script>
