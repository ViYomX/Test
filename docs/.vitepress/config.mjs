import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/test/",
  title: "YukkiMusic",
  description: "YukkiMusic is a Powerful Telegram Music+Video Bot written in Python using Pyrogram and Py-Tgcalls by which you can stream songs, video and even live streams in your group calls via various sources.",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'html_favicon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Yukki Music Logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
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
