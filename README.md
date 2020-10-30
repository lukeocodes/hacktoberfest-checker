# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

#### _Read this in [other languages](TRANSLATIONS.md)._

<kbd>[Deutsch](./.github/lang/README.de.md)</kbd> | 
<kbd>[English](./README.es.md)</kbd> | 
<kbd>[Português](./.github/lang/README.pt.md)</kbd> | 
<kbd>[Española](./.github/lang/README.es.md)</kbd> | 
<kbd>[Française](./.github/lang/README.fr.md)</kbd> | 
<kbd>[हिंदी](./.github/lang/README.hi.md)</kbd> | 
<kbd>[한국어](./.github/lang/README.kr.md)</kbd>

![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-18-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Hosted at [https://hacktoberfest.ninja](https://hacktoberfest.ninja), this allows users to check if a project is taking part is Hacktoberfest.

## Local Setup

As a decoupled web application, Netlify Dev is required to run the application and the Netlify function locally and use the sites check-repository feature.

### Netlify Dev

Install [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) to the application and Netlify Functions locally.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Create a Personal Access Token

You need to create a GitHub Personal Access Token to be able to access the GitHub API from your local environment.

[Follow the documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) and don't forget to copy the token before you leave the page (or you'll need to make two).

It ***ONLY*** needs the `public_repo` scope. Adding more scopes could be a security risk.

### Install Packages

To install the packages required for this project, run:

```bash
npm install
```

### Configure Environment

Create a `.env` file and add your access token to it as shown here.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Start the Local Environment

Using the Netlify Dev CLI, start the application.

```bash
$ netlify dev
```

### Does it work?

The site will be available on [localhost:8888](http://localhost:8888) by default.

## Contributing

Contributions welcome! See [CONTRIBUTING](./CONTRIBUTING.md) file.

## License

Licensed as MIT. See [LICENSE](./LICENSE) file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/lukeocodes"><img src="https://avatars0.githubusercontent.com/u/956290?v=4" width="100px;" alt=""/><br /><sub><b>Luke Oliff</b></sub></a><br /><a href="#ideas-lukeocodes" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Documentation">📖</a> <a href="#design-lukeocodes" title="Design">🎨</a></td>
    <td align="center"><a href="https://charlie.fyi"><img src="https://avatars0.githubusercontent.com/u/655807?v=4" width="100px;" alt=""/><br /><sub><b>Charlie</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=charj" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Acharj" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/RascalTwo"><img src="https://avatars0.githubusercontent.com/u/9403665?v=4" width="100px;" alt=""/><br /><sub><b>Rascal_Two</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=RascalTwo" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jason-chan-44b828190"><img src="https://avatars3.githubusercontent.com/u/46631787?v=4" width="100px;" alt=""/><br /><sub><b>Jason Chan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=Jchann24" title="Code">💻</a></td>
    <td align="center"><a href="http://www.nhcarrigan.com"><img src="https://avatars1.githubusercontent.com/u/63889819?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas Carrigan (he/him)</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=nhcarrigan" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Anhcarrigan" title="Bug reports">🐛</a> <a href="#ideas-nhcarrigan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=nhcarrigan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/GregHolmes"><img src="https://avatars0.githubusercontent.com/u/2411269?v=4" width="100px;" alt=""/><br /><sub><b>Greg Holmes</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=GregHolmes" title="Documentation">📖</a></td>
    <td align="center"><a href="https://alhassan.best"><img src="https://avatars2.githubusercontent.com/u/23234466?v=4" width="100px;" alt=""/><br /><sub><b>Alhassan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alhassanv" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Pandz18"><img src="https://avatars1.githubusercontent.com/u/58665834?v=4" width="100px;" alt=""/><br /><sub><b>Pandz18</b></sub></a><br /><a href="#translation-Pandz18" title="Translation">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=Pandz18" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.wanjarunkel.de"><img src="https://avatars2.githubusercontent.com/u/29057144?v=4" width="100px;" alt=""/><br /><sub><b>Wanja Runkel</b></sub></a><br /><a href="#translation-wrunkel" title="Translation">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=wrunkel" title="Documentation">📖</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Awrunkel" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://sudipto.ghosh.pro"><img src="https://avatars3.githubusercontent.com/u/11232940?v=4" width="100px;" alt=""/><br /><sub><b>Sudipto Ghosh</b></sub></a><br /><a href="#translation-sudiptog81" title="Translation">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=sudiptog81" title="Documentation">📖</a></td>
    <td align="center"><a href="https://alvaro.codes"><img src="https://avatars1.githubusercontent.com/u/28715114?v=4" width="100px;" alt=""/><br /><sub><b>Álvaro Artano</b></sub></a><br /><a href="#translation-alvaroartano" title="Translation">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alvaroartano" title="Documentation">📖</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Aalvaroartano" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://bedav.org"><img src="https://avatars2.githubusercontent.com/u/46835608?v=4" width="100px;" alt=""/><br /><sub><b>Shreyas Sreenivas</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Ashreyas44" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://mananchawla.ml"><img src="https://avatars3.githubusercontent.com/u/42414965?v=4" width="100px;" alt=""/><br /><sub><b>Manan Chawla</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Amananchawla2005" title="Bug reports">🐛</a> <a href="#design-mananchawla2005" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/gregorygregio"><img src="https://avatars2.githubusercontent.com/u/16940557?v=4" width="100px;" alt=""/><br /><sub><b>Gregory Gregio</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=gregorygregio" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://leobia.github.io/"><img src="https://avatars2.githubusercontent.com/u/26444579?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Aleobia" title="Bug reports">🐛</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=leobia" title="Code">💻</a></td>
    <td align="center"><a href="https://cristianbgp.com"><img src="https://avatars0.githubusercontent.com/u/8507974?v=4" width="100px;" alt=""/><br /><sub><b>Cristian Granda</b></sub></a><br /><a href="#translation-cristianbgp" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/saxocat"><img src="https://avatars3.githubusercontent.com/u/73019845?v=4" width="100px;" alt=""/><br /><sub><b>João</b></sub></a><br /><a href="#translation-saxocat" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/LIMUNADE"><img src="https://avatars2.githubusercontent.com/u/20593218?v=4" width="100px;" alt=""/><br /><sub><b>Semyon Banser</b></sub></a><br /><a href="#translation-LIMUNADE" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Trees > Tees

For Hacktoberfest participants: Please consider opting in to have a tree planted on your behalf in the Hacktoberfest Forest instead of claiming a T-shirt. [We need to look after our climate!](https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
