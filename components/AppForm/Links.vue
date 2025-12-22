<template>
  <base-form-section title="Links" description="Some website links">
    <!-- <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Icon keys can be found in
        <a class="underline" href="https://icones.js.org/"
          >https://icones.js.org/</a
        >.
      </p>
    </template> -->
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element: link }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <icon
              name="radix-icons:drag-handle-dots-2"
              class="w-6 h-6 text-slate-500 drag-handle"
            />
          </button>
          <button
            @click="removeLink(link)"
            class="absolute items-center justify-center hidden w-6 h-6 rounded-full group-hover:flex bg-slate-300 text-slate-600 -right-3 -top-3"
          >
            <icon name="fluent:dismiss-24-regular" class="w-4 h-4" />
          </button>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="label"
                    class="block text-sm font-medium text-gray-700"
                    >Label</label
                  >
                  <input
                    type="text"
                    name="label"
                    id="label"
                    v-model="link.l"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="url"
                    class="block text-sm font-medium text-gray-700"
                    >URL</label
                  >
                  <input
                    type="url"
                    name="url"
                    id="url"
                    v-model="link.u"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <p
                class="mt-2 text-xs text-center text-slate-400"
                v-if="!link.l || !link.u"
              >
                Link shown in preview once label and url are added
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <!-- <button
      @click="appendLink"
      class="block w-full py-2 mt-8 border-2 rounded-lg text-slate-500 border-slate-300"
    >
      <icon name="fluent:add-circle-24-regular" class="w-6 h-6" />
    </button> -->
  </base-form-section>
</template>
<script setup>
import draggable from "vuedraggable";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: Array,
});
const appendLink = () => {
  // 創建新的陣列而不是直接修改 props
  const newLinks = [...props.modelValue, {
    i: "",
    l: "",
    u: "",
  }];
  emit("update:modelValue", newLinks);
};

const removeLink = (link) => {
  // 創建新的陣列而不是直接修改 props，確保響應式更新
  const newLinks = props.modelValue.filter(item => item !== link);
  emit("update:modelValue", newLinks);
};

// 暴露函數供測試使用
defineExpose({ removeLink, appendLink });
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
