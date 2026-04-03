export const SITE = {
  website: "https://blog.inkind.kr/", // replace this with your deployed domain
  author: "inkind",
  profile: "",
  desc: "일상 속 놓치기 쉬운 정보를 친절하게 챙겨드립니다.",
  title: "inkind.lab 축제",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
