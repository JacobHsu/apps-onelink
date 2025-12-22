export interface AppItem {
  name: string;
  logo: string;
  url: string;
}

export interface SocialLink {
  l: string; // Label
  i: string; // Icon URL
  u: string; // URL
}

export interface AppCategory {
  n: string; // Name (e.g., "Language")
  d: string; // Description (e.g., "Education")
  i: string; // Image/Icon for the category
  apps: AppItem[];
  ls: SocialLink[];
}

export const useAppData = () => {
  const educationData: AppCategory = {
    n: "Language",
    d: "Education",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "多鄰國",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b0/f1/a5/b0f1a533-5c9e-47c3-24b8-c110fae32bd9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
        url: "https://apps.apple.com/tw/app/多鄰國-極速學外語/id570060128",
      },
      {
        name: "英文多益知識王",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3f/53/4b/3f534b79-0734-90a0-08d4-9278726a2906/AppIconSpecial-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/英文多益知識王-單字-多益-托福-英檢-雅思必備吐司/id1611674456",
      },
      {
        name: "Word Up",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/0c/6e/470c6e73-9eb2-1882-aa5a-0de07e501632/AppIcon-0-0-1x_U007epad-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/聰明學習-word-up-單字救星-多益和學測刷題神器/id1447838299",
      },
      {
        name: "死神單字",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/34/a7/1334a7eb-9d8d-7c9c-3688-bad005a0d749/AppIcon-0-0-1x_U007emarketing-0-7-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/死神單字-7000單字-多益-托福-雅思-國中會考/id1570762449",
      },
      {
        name: "刷刷庫",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b4/c1/da/b4c1dabd-f0fd-8d9b-cc18-c5e881ebdf41/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/刷刷庫-多益高分加速器/id6498889068",
      },
      {
        name: "Santa",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/76/84/75/7684757f-7ad1-629a-1f66-86abefa5f012/AppIcon-PROD-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/santa-升答-ai-toeic/id1148006701",
      },
      {
        name: "Wordbranch",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/61/37/6e/61376e69-f4f4-b988-4b7f-d068c4baa554/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/wordbranch-字首字根字尾字典/id1080556151?platform=iphone",
      },
      {
        name: "Master English",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/20/5f/0f/205f0f72-5f26-da55-39df-23d3bc830979/AppIcon-0-1x_U007emarketing-0-11-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/master-english-wordy/id6670703228",
      },
      {
        name: "一点英语",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/87/ed/d9/87edd95f-141c-ff5e-635e-602bcdbe083a/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/一点英语-刷视频也能学英语/id1392803612?platform=iphone",
      },
      {
        name: "Drops",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ba/2c/8b/ba2c8b4d-d874-ce0e-8c37-b7c70e1f2013/AppIconInternational-0-0-1x_U007emarketing-0-10-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/drops點滴學語言-學習韓語葡萄牙語日語俄語和其他的外語/id939540371",
      },
      {
        name: "Quizlet",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8a/1b/81/8a1b81ef-2189-b487-69d3-f87bc4751661/AppIcon-production-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/quizlet-使用單詞卡學習/id546473125",
      },
      {
        name: "LetMeSpeak",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8b/6d/b8/8b6db8c7-441c-eaeb-b6c6-6533fa172f2e/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/letmespeak-英文學習遊戲輕鬆背單字/id1478889848?",
      },
    ],
    ls: [
      {
        l: "Voicetube",
        i: "https://vt-cdn.voicetube.com/assets/img/logo/favicon/16.png",
        u: "https://tw.voicetube.com",
      },
      {
        l: "Lingvist",
        i: "https://lingvist.com/favicon.ico",
        u: "https://learn.lingvist.com",
      },
      {
        l: "BBC Learning English",
        i: "",
        u: "https://www.bbc.co.uk/learningenglish",
      },
    ],
  };

  const productivityData: AppCategory = {
    n: "Habit",
    d: "Productivity",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "Forest",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2d/b4/4e/2db44e90-1f03-d8bf-916c-e082b4c575d3/AppIcon-0-0-1x_U007epad-0-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/forest-專注森林-讀書專注番茄鐘/id866450515",
      },
      {
        name: "Fews",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/30/1f/d9/301fd932-3a87-b305-d568-a00a4e570249/AppIcon-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/fews-habit-starter/id1480926210",
      },
      {
        name: "Productive",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cc/f2/73/ccf273e8-798b-bec5-80d0-9d1fdcaeed86/AppIcon_iOS-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/待辦事項清單-習慣養成-productive/id983826477",
      },
      {
        name: "Motivated",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/da/11/c0/da11c0d2-20c5-2176-2b8d-e133e55923ea/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/habit-tracker-motivated/id6472646551",
      },
      {
        name: "Gym Tracker",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a8/61/3d/a8613d17-7d9c-a2ea-87b8-58a0df241163/AppIcon_Checkmark_Rainbow_OnDarkblue_WithGradientAndGlow-0-1x_U007ephone-0-1-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/gym-tracker-productivity-app/id1403517519",
      },
      {
        name: "Supatask",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/72/db/ef72db03-bc5c-e530-803c-d87ba68c712d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/supatask-daily-planner-todo/id1671435397?platform=iphone",
      },
      {
        name: "Plan Joy",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/65/75/ac/6575acf1-7b20-edd3-33cc-d6fa5d4c8175/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.png",
        url: "https://apps.apple.com/tw/app/plan-joy-時間管理-學習打卡-工作計劃清單/id6738637439",
      },
      {
        name: "HabitBot",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c8/fe/b0/c8feb051-4645-2c0e-78f1-f4b42634158f/AppIcon-0-0-1x_U007epad-0-1-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/habit-tracker-habitbot/id6744642284?platform=iphone",
      },
      {
        name: "Repov",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/31/3a/7b313a38-8cf6-c603-a28f-ac4390fc71c3/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/repov-電影-書籍-美食-記錄世界的所有視角/id6502975294",
      },
      {
        name: "GoalSteps",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b1/ad/74/b1ad746d-f38b-38f7-a70e-b86046675d5c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/goalsteps-goal-tracker/id6749514026?platform=iphone",
      },
      {
        name: "Horizon",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/98/1a/74981a00-0b6d-1530-f808-14ba07614bd8/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/habit-tracker-horizon/id1524155304?platform=iphone",
      },
      {
        name: "Blissful",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/00/0c/55/000c552a-831b-de77-9d7f-759f560343db/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/blissful-journal-mood-tracker/id6476490678",
      },
    ],
    ls: [
      {
        l: "Notion",
        i: "https://www.notion.com/front-static/favicon.ico",
        u: "https://www.notion.com/zh-tw",
      },
      {
        l: "Airtable",
        i: "https://www.airtable.com/favicon.ico",
        u: "https://www.airtable.com/",
      },
      {
        l: "Trello",
        i: "https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico",
        u: "https://trello.com/zh-Hant",
      },
      {
        l: "Workflowy",
        i: "https://workflowy.com/media/i/favicon.ico",
        u: "https://workflowy.com/",
      },
    ],
  };

  const newsData: AppCategory = {
    n: "Information",
    d: "News",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "X",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/23/40/63/234063fb-ac56-d2ea-301e-40d3bd5f9c7f/ProductionAppIcon-0-0-1x_U007emarketing-0-7-0-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/x/id333903271",
      },
      {
        name: "Threads",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5c/25/56/5c2556d9-55e4-6689-8632-3f7ba99d05d9/Prod-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/threads/id6446901002",
      },
      {
        name: "Telegram",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/18/e1/36/18e136cc-3920-4a30-782e-29c5b5367e1c/AppIconLLC-0-0-1x_U007emarketing-0-8-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/telegram-messenger/id686449807",
      },
      {
        name: "LINE",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e2/cf/39/e2cf3912-2b26-eb4a-2e52-333d8a50ac43/basic_default-0-0-1x_U007epad-0-6-0-0-sRGB-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/line/id443904275",
      },
      {
        name: "Apple Podcasts",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/13/59/6b135929-433a-3f22-fde8-7a894ed07e38/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/apple-podcasts/id525463029",
      },
      {
        name: "喜马拉雅",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/1e/c3/541ec330-5662-d430-bc71-fdae60ab5aaa/icon.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/喜马拉雅-听书社区-电台有声小说相声评书/id876336838?platform=iphone",
      },
      {
        name: "得到",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/41/9e/fa/419efae9-43c4-947d-3a46-0377e3b476f5/AppIcon-0-0-1x_U007epad-0-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/得到-课程听书电子书/id1016323413",
      },
      {
        name: "Snipd",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/84/9a/d5849a39-9f9d-2532-f115-a5f6385ae629/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/snipd-ai-podcast-player/id1557206126",
      },
      {
        name: "Discord",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e7/14/5f/e7145f9c-8030-908e-b409-936543280f0f/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/discord-聊天-玩遊戲-消磨時間/id985746746",
      },
      {
        name: "ListenLeap",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a6/a4/4b/a6a44ba1-55bc-e864-93b2-9ce9c3e87c21/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/listenleap-幫你聽懂英文podcast-輕鬆學英文/id6642688167",
      },
      {
        name: "Slack",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/30/1e/b5/301eb590-5aae-fd4a-f3b7-9b50c8e3e26f/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/slack/id618783545",
      },
      {
        name: "Folo",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/97/8c/89/978c89e6-7013-5d43-8a36-c70af478b326/electron.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/folo-follow-everything/id6739802604",
      },
    ],
    ls: [
      {
        l: "Comet",
        i: "https://framerusercontent.com/images/bnQ1gGSCHS8T2mb5FVI2rQnx5YI.png",
        u: "https://www.perplexity.ai/comet",
      },
      {
        l: "Atlas",
        i: "https://images.ctfassets.net/8su2tbn87fck/6sGycP6cV9sSE5irYK4bGy/f6eb9414c76057e6d759a7772bb8a559/Atlas_Tahoe_Icon.png?q=90&fm=webp",
        u: "https://chatgpt.com/zh-Hant/atlas",
      },
      {
        l: "brave",
        i: "https://brave.com/favicon.ico",
        u: "https://brave.com/",
      },
      {
        l: "duckduckgo",
        i: "https://duckduckgo.com/favicon.ico",
        u: "https://duckduckgo.com/",
      },
    ],
  };

  const aiData: AppCategory = {
    n: "AI",
    d: "Assistant",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "ChatGPT",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/57/ef/ae/57efae02-424c-d8fc-edc4-c531aae269fa/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/chatgpt/id6448311069",
      },
      {
        name: "Google Gemini",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/f4/09/3bf4091e-a037-c981-1daa-812cb924e26f/AppIcon-0-0-1x_U007ephone-0-0-0-8-0-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/google-gemini/id6477489729",
      },
      {
        name: "Perplexity",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/64/6f/c1646fcd-a854-c8c9-5d5e-8f4aa0fe1d16/AppIcon-0-1x_U007epad-0-0-0-1-0-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/perplexity-ask-anything/id1668000334",
      },
      {
        name: "Grok",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bb/c0/91/bbc0913c-a295-1c5b-831f-541765d977ef/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/grok/id6670324846",
      },
      {
        name: "Google NotebookLM",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4a/cf/05/4acf05b8-a96f-514d-c266-1ef7ab156e15/logo_notebooklm_color-0-1x_U007emarketing-0-0-0-7-0-0-0-0-85-220-0.png/400x400ia-75.webp",
        url: "https://apps.apple.com/tw/app/google-notebooklm/id6737527615",
      },
      {
        name: "DeepSeek",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/91/b4/8b91b4b4-aef5-42bc-d7c1-c933f14da6ed/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/deepseek-ai-智能助手/id6737597349",
      },
      {
        name: "Copilot",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/03/ff/16/03ff16d2-4d03-9174-609b-7377b1d2baf0/AppIcon_Production-0-1x_U007epad-0-4-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/microsoft-copilot/id6472538445",
      },
      {
        name: "ChatOn",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f4/77/61/f4776139-8c9e-6b71-832e-de5d98598dc0/AppIcon-0-0-1x_U007ephone-0-1-0-0-85-220.png/200x200ia-75.webp", 
        url: "https://apps.apple.com/tw/app/chaton-ai-chatbot-assistant/id1661308505",
      },
      {
        name: "Claude",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e1/bc/0b/e1bc0b4a-db94-8d09-480b-23134a514d9e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/claude-by-anthropic/id6473753684",
      },
      {
        name: "Liner",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b8/6d/6e/b86d6e45-9aa2-4241-cfc0-fdd180b475e4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/liner-ai-search-with-sources/id955395198?platform=iphone",
      },
      {
        name: "Felo",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/4d/2a/474d2a55-1db5-756f-4836-8b980fbafbb0/AppIcon-0-0-1x_U007epad-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/felo-search-the-world/id6598782546",
      },
      {
        name: "Kimi",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/04/49/6d0449c5-dc69-da92-b23a-f0c00502e0a9/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/kimi-智能助手/id6474233312",
      },
    ],
    ls: [
      {
        l: "OpenRouter",
        i: "https://openrouter.ai/favicon.ico",
        u: "https://openrouter.ai/",
      },
      {
        l: "Google AI Studio",
        i: "https://www.gstatic.com/aistudio/ai_studio_favicon_2_32x32.png",
        u: "https://aistudio.google.com/",
      },
      {
        l: "Youlearn.ai",
        i: "https://framerusercontent.com/images/GwOgxcUXqY3gjmInMNBFDzowQI.png",
        u: "https://www.youlearn.ai/",
      },
      {
        l: "NotebookLM",
        i: "https://notebooklm.google.com/_/static/branding/v4/light_mode/favicon/favicon.svg",
        u: "https://notebooklm.google.com/",
      },
    ],
  };

  const financeData: AppCategory = {
    n: "Crypto",
    d: "Finance",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "幣安",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bf/a4/95/bfa4955e-e086-7c3a-3e5b-83bd88bb57d9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/幣安-買比特幣-就用全球第一投資理財首選加密貨幣交易所/id1436799971",
      },
      {
        name: "Pionex",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3d/d5/88/3dd588e6-6bd2-edfa-a810-3f679c6b645e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/pionex-派網-虛擬貨幣交易機器人/id1485348891",
      },
      {
        name: "CoinMarketCap",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6a/e0/69/6ae06951-1fb5-d4ae-b762-658303d9a725/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/coinmarketcap-加密貨幣追蹤器/id1282107098",
      },
      {
        name: "Coinank",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/45/60/d0/4560d085-ce77-bf34-53eb-f569984a6081/AppIcon-1x_U007epad-0-1-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/coinank-專業加密貨幣數據分析/id6444732071",
      },
      {
        name: "Bybit",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ce/4a/ce/ce4ace1a-43e2-de8d-4013-b888bae40fc5/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/bybit-購買比特幣和交易加密貨幣/id1488296980",
      },
      {
        name: "Maicoin",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/dd/5d/e0dd5d4c-21bf-2118-3c92-c7ff534b76a7/AppIcon-0-0-1x_U007ephone-0-85-220.png/246x0w.png",
        url: "https://apps.apple.com/tw/app/maicoin-買賣比特幣/id1439583926",
      },
      {
        name: "Coinglass",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3d/53/86/3d5386fd-5245-3acc-9222-a4177405413c/AppIcon-0-0-1x_U007ephone-0-11-0-0-sRGB-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/coinglass-綜合全球主流交易所/id1522250001",
      },
      {
        name: "TradingView",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/03/59/08/03590890-b3bb-70c7-f234-caa65b662f8a/AppIcon-0-0-1x_U007epad-0-11-0-0-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/tradingview-股票-外匯-和比特幣圖表/id1205990992",
      },
      {
        name: "Phantom",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/15/86/50/158650b1-651a-d07a-0c12-3b72329a2976/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/phantom-crypto-wallet/id1598432977",
      },
      {
        name: "Trust",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/06/ca/e5/06cae511-ace8-0f86-a3dc-b80f8195b801/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/trust-加密货币-比特币钱包/id1288339409",
      },
      {
        name: "MetaMask",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/38/00/e9/3800e9b6-4ff2-5c92-ab7e-e9fe584e9748/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/metamask-crypto-wallet/id1438144202",
      },
      {
        name: "World App",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a4/33/2b/a4332b65-9bbf-38dd-24fd-439a9026c568/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/world-app-worldcoin-wallet/id1560859847",
      },
    ],
    ls: [
      {
        l: "AiCoin",
        i: "https://www.aicoin.com/favicon.ico",
        u: "https://www.aicoin.com/",
      },
      {
        l: "PlayToEarn",
        i: "https://playtoearn.com/favicon-16x16.png",
        u: "https://playtoearn.com/",
      },
      {
        l: "DappRadar",
        i: "https://static.dappradar.com/website-fe-pr/public-assets/favicon-16x16.png",
        u: "https://dappradar.com/",
      },
      {
        l: "FastBull",
        i: "https://img.fastbull.com/static/images/favicon.ico",
        u: "https://www.fastbull.com/",
      },
    ],
  };

  const healthData: AppCategory = {
    n: "Fitness",
    d: "Health",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "Grow",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/26/59/11/26591159-b599-6746-1e68-369c93849076/AppIcon-0-0-1x_U007ephone-0-0-0-1-0-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/grow-你的健康貼心好夥伴/id1560604814",
      },
      {
        name: "Plop",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/aa/bf/25/aabf25e6-266e-8425-9912-c055affd8519/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/plop-便便日記/id1505427265?platform=iphone",
      },
      {
        name: "血壓測量儀",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b1/01/59/b10159ec-18a0-a26c-0844-ee7232e985e8/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/血壓測量儀-心率檢測-心臟健康應用/id6474854633",
      },
      {
        name: "血氧",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/89/e2/3189e219-0462-30cd-8c68-6f166b9e7c05/AppIcon-0-0-1x_U007ephone-0-11-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/血氧-血氧檢測/id6599848551",
      },
      {
        name: "Easy Chair Workout",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/93/eb/e7/93ebe7a7-ec76-253a-ca05-71e82fab30d2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/easy-chair-workout-for-men/id6740841796",
      },
      {
        name: "棒式運動挑戰",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/97/c3/c2/97c3c2bc-cb5e-7561-d87a-3053e6f6af1e/AppIcon-0-0-1x_U007emarketing-0-0-0-3-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.jpeg/246x0w.webp",
        url: "https://apps.apple.com/tw/app/棒式運動挑戰/id1442191346",
      },
      {
        name: "Seven",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/97/80/61/978061c0-bb05-fe92-befc-5dde2b6e8cf0/AppIcon-0-0-1x_U007epad-0-1-0-0-P3-GLES2_U002c0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/seven-7-minute-workout/id650276551",
      },
      {
        name: "超慢跑計時器",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/25/12/46/25124632-d7aa-5761-5757-549a5e322101/AppIcon-0-0-1x_U007epad-0-0-85-220.png/246x0w.png",
        url: "https://apps.apple.com/tw/app/超慢跑計時器/id6445976187?platform=iphone",
      },
      {
        name: "Propel",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/ba/b6/3bbab6ce-f9dc-530d-0792-b2750e47ef8e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/propel-adhd過動症智力遊戲-專注的動腦-益智遊戲/id6472498233",
      },
      {
        name: "IQ Test",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d0/60/db/d060dbb7-6170-0896-b52a-493882b6f811/AppIcon-0-0-1x_U007epad-0-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/iq-test-brain-games-simbo/id1670740872",
      },
      {
        name: "Calzeno : AI 卡路里計算器",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0a/c7/b2/0ac7b266-9ca1-ac0d-653b-ab81f4b5621d/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/calorie-ai-macro-food-scanner/id6744751535?platform=iphone",
      },
      {
        name: "YouBike微笑單車",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/aa/3f/5d/aa3f5d5a-00ce-acf4-b5cf-cc38f0e13d82/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/youbike微笑單車-官方版/id1483423095",
      },
    ],
    ls: [
      {
        l: "Common health",
        i: "https://web.commonhealth.com.tw/online-source/commonhealth/favicon.ico",
        u: "https://www.commonhealth.com.tw/",
      },
    ],
  };

  const toolsData: AppCategory = {
    n: "Tools",
    d: "Utilities",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "Natural Insight",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1c/b1/3e/1cb13e1f-ac77-99ae-f2e9-b6549d660967/CTAppIconDots-0-1x_U007epad-0-1-85-220-0.png/246x0w.png",
        url: "https://apps.apple.com/tw/app/natural-insight-calendar/id535887902",
      },
      {
        name: "World Clock",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b4/53/cf/b453cfd4-d713-cc38-2e80-c01ffaf5e79c/AppIcon-0-0-1x_U007epad-0-1-P3-85-220.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/world-clock-master-time-zones/id6448859727",
      },
      {
        name: "Bobby",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/43/c8/db/43c8db26-7f3f-11f3-3762-d7f73e77ac41/AppIcon-0-1x_U007ephone-0-1-0-85-220-0.png/246x0w.webp",
        url: "https://apps.apple.com/tw/app/bobby-track-subscriptions/id1059152023",
      },
      {
        name: "Subscription Cancel",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/c7/5f/7bc75f90-8cdd-140b-c9a7-c81a55576682/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/246x0w.png",
        url: "https://apps.apple.com/tw/app/subscription-cancel/id6593692260",
      },
        {
        name: "發票怪獸",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/d7/07/3bd70742-da8e-d682-568c-89ab6071aa6d/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/發票怪獸/id1089127465",
      },
      {
        name: "發票載具",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ab/16/35/ab1635eb-1b5f-ef1b-97b3-efa85845d33e/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/發票載具-統一發票對獎-雲端加碼獎-夢幻發票自訂圖片/id1434785043",
      },
      {
        name: "Whoscall 象卡來",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/49/2a/93492acb-32c8-6c30-c84d-6a1e3e593de3/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/whoscall-象卡來/id929968679",
      },
        {
        name: "ACCUPASS - 活動通",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/37/4c/64/374c6444-94e0-881a-69c0-0509b8150062/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/accupass-活動通/id516844208",
      },
    ],
    ls: [
      {
        l: "Windy",
        i: "https://www.windy.com/img/favicon.png",
        u: "https://www.windy.com/",
      },
      {
        l: "Typhoon tw",
        i: "https://typhoon.tw/static/img/titlelogo.ico",
        u: "https://typhoon.tw/",
      },
    ],
  };

  const tvData: AppCategory = {
    n: "TV",
    d: "Entertainment",
    i: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png",
    apps: [
      {
        name: "Netflix",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b2/b8/45/b2b845ba-155b-c175-ce43-740bc7f28cb2/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/netflix/id363590051",
      },
      {
        name: "Disney+",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/d4/e5/c7d4e536-33cc-1e2c-833e-d2772c5d2d5f/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/disney/id1446075923",
      },
      {
        name: "HBO Max",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/ed/2c/23ed2c0b-47f7-2245-f61b-6ee019035245/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200ia-75.webp",
        url: "https://apps.apple.com/tw/app/hbo-max-串流播放電視節目和電影/id1666653815",
      },
      {
        name: "Apple TV",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1d/38/04/1d380449-215e-f6e2-0ba4-68538c2be4d0/Placeholder.mill/200x200bb-75.webp",
        url: "https://apps.apple.com/tw/app/apple-tv/id1174078549",
      },
    ],
    ls: [
      {
        l: "trakt.tv",
        i: "https://walter-r2.trakt.tv/hotlink-ok/public/2024/favicon.svg",
        u: "https://trakt.tv/calendars/shows",
      },
      {
        l: "JustWatch",
        i: "https://www.justwatch.com/appassets/favicon.ico",
        u: "https://www.justwatch.com/",
      },
      {
        l: "IMDb",
        i: "https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png",
        u: "https://www.imdb.com/calendar/?region=TW&type=MOVIE",
      },
      {
        l: "TMDB",
        i: "https://www.themoviedb.org/assets/2/v4/icons/mstile-144x144-30e7905a8315a080978ad6aeb71c69222b72c2f75d26dab1224173a96fecc962.png",
        u: "https://www.themoviedb.org/",
      },
    ],
  };

  const demoData: Record<string, AppCategory> = {
    education: educationData,
    productivity: productivityData,
    news: newsData,
    ai: aiData,
    finance: financeData,
    health: healthData,
    tv: tvData,
    tools: toolsData,
  };

  return {
    demoData,
  };
};
