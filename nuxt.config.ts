export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Bodoni Moda': [400, 500, 600, 700],
      Montserrat: [400, 500, 600, 700, 800],
      Inter: [400, 500, 600, 700]
    },
    display: 'swap',
    preload: true,
    download: false
  },

  app: {
    head: {
      title: 'Evelyn Naava | Protection. Partnerships. Prosperity.',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Evelyn Naava helps individuals, families and businesses build lasting financial security through securities trading, unit trusts, bonds, investment planning and insurance.'
        },
        { name: 'theme-color', content: '#2C2D6D' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    contactToEmail: process.env.CONTACT_TO_EMAIL || '',
    public: {}
  }
})
