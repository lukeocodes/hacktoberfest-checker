module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'fr',
      iso: 'fr',
      name: 'Française',
      file: 'fr.js',
    },
    {
      code: 'de',
      iso: 'de',
      name: 'Deutsch',
      file: 'de.js',
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
