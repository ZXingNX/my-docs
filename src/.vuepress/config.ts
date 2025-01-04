import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "Xing's Blog",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
