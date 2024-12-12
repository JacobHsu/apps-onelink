<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="flex flex-col h-screen col-span-2 bg-slate-100">
      <div class="flex-1 p-8 overflow-y-auto">
        <app-form-profile :name="data.n" :desc="data.d" :image="data.i" />
        <app-form-hr />
        <app-form-social-links :app1="data.one" :app2="data.two" :app3="data.three"
          :app4="data.four" :app5="data.five" :app6="data.six" :app7="data.seven"
          v-model:whatsapp="data.w" v-model:youtube="data.y" />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="flex items-center bg-white border-t">
        <button @click="prefillDemoData"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700">
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button @click="clipboard"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700">
          <span> Clipboard </span>
          <icon name="ph:paper-plane-tilt-bold" class="w-4 h-4" />
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
    // n: "Language",
    // d: "Education",
    // i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    // f: "https://www.facebook.com/john_snow",
    // t: "https://twitter.com/john_snow",
    // ig: "https://www.instagram.com/john_snow",
    // e: "mail@john_snow.cc",
    // gh: "https://github.com/john_snow",
    // tg: "https://t.me/john_snow",
    // w: "+918888888888",
    // y: "https://youtube.com/@john_snow",
    // l: "https://linkedin.com/john_snow",
    // ls: [
    //   {
    //     l: "My Website",
    //     i: "ph:globe-duotone",
    //     u: "https://example.com",
    //   },
    //   {
    //     l: "Amazon wishlist",
    //     i: "ant-design:amazon-outlined",
    //     u: "https://amazon.in",
    //   },
    //   {
    //     l: "React JS course",
    //     i: "grommet-icons:reactjs",
    //     u: "https://reactjs.org/",
    //   },
    //   {
    //     l: "Donate for our cause",
    //     i: "iconoir:donate",
    //     u: "https://who.int",
    //   },
    //   {
    //     l: "Download my resume",
    //     i: "ph:file-pdf",
    //     u: "https://google.com",
    //   },
    // ],
  };
};

const clipboard = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
