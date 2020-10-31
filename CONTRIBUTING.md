# Contributing

If you're interest in contributing, please first check out [Code of Conduct](./CODE_OF_CONDUCT.md).

## Translations

Translations exist as **3** parts, which you can submit as a single pull-request as you wish.

### Site Documentation

Site documentation files exist under the `./github/lang` directory. If you'd like to submit a translation, please provide the following files named with the correct [two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

e.g. Chinese

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Update the links between your new `README.zh.md` and `CONTRIBUTING.zh.md` files so that clicking on ***Contributing*** links from inside `README.zh.md` the goes straight to `CONTRIBUTING.zh.md`.

### i18n

Language files live inside `lang/` and exist as a JavaScript file named after the [two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

e.g. Hindi

- `lang/hi.js`

You should copy `lang/en.js` to your new language file, then proceed to translate every string. Careful not to break any strings which have markup included in them.

### Content

Content lives in the `content/` directory under a directory named after the [two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Y

e.g. Spanish (mainland)

- `content/es/`

You should copy the `content/en/` directory to your new language directory, then proceed to translate all the contents of those files. Careful not to break any of the HTML that might exist. The frontmatter at the top of the documents is not used currently, but please translate that too.

Currently the files to be translated are:

- `details.md`
- `index.md`

## Issues

Please find an issue, message for more info, claim it as yours. Then you can work on it, and make a PR once ready.

To make a pull-request, please make sure you are forking the repository before you branch off of it. PLEASE DO NOT modify your own `main` branch before making a pull-request to this `main` branch. If in doubt, please ask.

## Other Improvements

Please don't make pull-requests out of the blue. Please raise an issue before working on anything.
