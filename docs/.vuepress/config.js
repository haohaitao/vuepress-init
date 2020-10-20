module.exports = {
  // 页面标题
  title: 'VuePress Demo',
  // 网页描述
  description: 'vuepress初始化使用demo',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/haohaitao/vuepress-init',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '导航一',link: '/nav1/'},
      { text: '导航二(带下拉选项)', items: [
          { text: '案例1', link: '/nav_menu/demo1/'}, 
          { text: '案例2', link: '/nav_menu/demo2/'},
          { text: '案例3', link: '/nav_menu/demo3/'}
        ]
      },
      { text: '导航三', link: '/nav3/'},
      { text: '导航四', link: '/nav4/'},
      { text: '导航五',link: '/nav5/'},
      { text: '导航六',link: '/nav6/'},
      { text: '指南',link: '/guide/'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}