<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile v-model:name="data.n" v-model:desc="data.d" v-model:image="data.i" />
        <app-form-hr />
        <app-form-social-links v-model:app1="data.one" v-model:app2="data.two" v-model:app3="data.three"
          v-model:github="data.gh" v-model:telegram="data.tg" v-model:linkedin="data.l" v-model:email="data.e"
          v-model:whatsapp="data.w" v-model:youtube="data.y" />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700">
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button @click="clipboard"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700">
          <span> Clipboard </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "Language",
    d: "Education",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    app1: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b0/f1/a5/b0f1a533-5c9e-47c3-24b8-c110fae32bd9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
    one: "https://apps.apple.com/tw/app/多鄰國-極速學外語/id570060128",
    app2: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3f/53/4b/3f534b79-0734-90a0-08d4-9278726a2906/AppIconSpecial-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
    two: "https://apps.apple.com/tw/app/英文多益知識王-單字-多益-托福-英檢-雅思必備吐司/id1611674456",
    app3: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/0c/6e/470c6e73-9eb2-1882-aa5a-0de07e501632/AppIcon-0-0-1x_U007epad-0-85-220.png/246x0w.webp",
    three: "https://apps.apple.com/tw/app/聰明學習-word-up-單字救星-多益和學測刷題神器/id1447838299",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const clipboard = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
