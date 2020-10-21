module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.js',
    },
  ],
  defaultLocale: 'en',
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
