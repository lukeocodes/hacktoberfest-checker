module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'hi',
      iso: 'hi',
      name: 'हिंदी',
      file: 'hi.js',
    },
  ],
  defaultLocale: 'hi',
  lazy: true,
  langDir: 'lang/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true,
  },
  vueI18n: {
    fallbackLocale: 'en',
  },
}
