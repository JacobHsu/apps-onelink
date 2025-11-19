<template>
  <base-form-section
    title="Profile"
    description="Some information about apps"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700"
            >Category</label
          >
          <div class="mt-1">
            <input
              id="category"
              name="category"
              rows="3"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder=""
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps(["name", "desc", "image"]);
const emit = defineEmits(["update:name", "update:desc"]);
</script>
