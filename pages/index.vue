<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="flex flex-col h-screen col-span-2 bg-slate-100">
      <div class="flex-1 p-8 overflow-y-auto">
        <app-form-profile
          :name="data.n"
          :desc="data.d"
          :image="data.i"
        />
        <app-form-hr />
        <app-form-social-links v-bind="data" />
        <!-- <app-form-social-links
          :app1="data.one"
          :app2="data.two"
          :app3="data.three"
          :app4="data.four"
          :app5="data.five"
          :app6="data.six"
          :app7="data.seven"
          :app8="data.eight"
          :app9="data.nine"
        /> -->
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="flex items-center bg-white border-t">
        <button
          @click="prefillDemoData"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="clipboard"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
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
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: "",
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
    three:"https://apps.apple.com/tw/app/聰明學習-word-up-單字救星-多益和學測刷題神器/id1447838299",
    app4: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/34/a7/1334a7eb-9d8d-7c9c-3688-bad005a0d749/AppIcon-0-0-1x_U007emarketing-0-7-85-220.png/246x0w.webp",
    four: "https://apps.apple.com/tw/app/死神單字-7000單字-多益-托福-雅思-國中會考/id1570762449",
    app5: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b4/c1/da/b4c1dabd-f0fd-8d9b-cc18-c5e881ebdf41/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/246x0w.webp",
    five: "https://apps.apple.com/tw/app/刷刷庫-多益高分加速器/id6498889068",
    app6: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/b5/c5/88b5c5f9-083c-a57f-8012-5b8d3b4b9706/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/246x0w.webp",
    six: "https://apps.apple.com/tw/app/todaii-english-學英文-更快-更好/id1625797002",
    app7: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/61/37/6e/61376e69-f4f4-b988-4b7f-d068c4baa554/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
    seven: "https://apps.apple.com/tw/app/wordbranch-字首字根字尾字典/id1080556151?platform=iphone",
    app8: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ac/c5/28/acc528d1-413a-d696-887c-994ca3669d2c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
    eight: "https://apps.apple.com/tw/app/ted/id376183339",
    app9: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/87/ed/d9/87edd95f-141c-ff5e-635e-602bcdbe083a/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/246x0w.webp",
    nine: "https://apps.apple.com/tw/app//一点英语-刷视频也能学英语/id1392803612?platform=iphone",
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
