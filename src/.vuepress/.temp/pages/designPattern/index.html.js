import comp from "D:/my-docs/src/.vuepress/.temp/pages/designPattern/index.html.vue"
const data = JSON.parse("{\"path\":\"/designPattern/\",\"title\":\"Design Pattern\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Design Pattern\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/designPattern/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Xing's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Design Pattern\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Design Pattern\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
