import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/test/",
  title: "YukkiMusic",
  description: "YukkiMusic is a Powerful Telegram Music+Video Bot written in Python using Pyrogram and Py-Tgcalls by which you can stream songs, video and even live streams in your group calls via various sources.",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  editLink: {
      pattern: 'https://github.com/ViYomX/test/edit/main/docs/:path'
    },
  transformPageData(pageData) {
    const siteUrl = 'https://viyomx.github.io/test/'
    const canonicalUrl = `${siteUrl}${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'html_favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'YukkiMusic' }],
    ['meta', { property: 'og:url', content: 'https://TheTeamVivek.github.io' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'YukkiMusic Logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/TheTeamVivek/YukkiMusic',
        ariaLabel: 'Github'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/TheTeamVivek',
        ariaLabel: 'Telegram'
      }
    ]

  }
})
