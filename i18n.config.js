module.exports = {
  locales: [
    {
      code: 'de',
      iso: 'de',
      name: 'Deutsch',
      file: 'de.js',
    },
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
      code: 'hi',
      iso: 'hi',
      name: 'हिंदी',
      file: 'hi.js',
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
