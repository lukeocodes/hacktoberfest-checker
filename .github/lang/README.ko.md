# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

#### _Read this in [other languages](TRANSLATIONS.md)._

<kbd>[Deutsch](./.github/lang/README.de.md)</kbd> |
<kbd>[English](./README.es.md)</kbd> |
<kbd>[Português](./.github/lang/README.pt.md)</kbd> |
<kbd>[Española](./.github/lang/README.es.md)</kbd> |
<kbd>[Française](./.github/lang/README.fr.md)</kbd> |
<kbd>[हिंदी](./.github/lang/README.hi.md)</kbd>
<kbd>[한국어](./.github/lang/README.ko.md)</kbd>


![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-18-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[https://hacktoberfest.ninja](https://hacktoberfest.ninja)를 방문하여 자신의 레포지토리가 Hecktoberfest에 적합한지 확인 할 수 있습니다.

## Local Setup

독립적으로 실행될 수 있는 어플리케이션으로서, Netlify Dev 프로그램과 Netlify 기능을 로컬 시스템 상에서 실행되어야 합니다. 그 후에, 웹사이트 상의 check-repository 기능을 사용하세요.

### Netlify Dev

[Netlify Dev](https://www.netlify.com/products/dev/#how-it-works)을 로컬 시스템에 설치 하세요.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Personal Access Token 생성

로컬 환경에서 깃허브 API에 접근하기 위해 GitHub Personal Access Token을 생성하여야 합니다.

[문서](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)에 명시된 단계를 따르고, 페이지를 떠나기 전에 생성된 토큰을 반드시 별도로 저장해야 합니다(토큰을 저장하지 않았다면 새로운 토큰을 생성해야 합니다).

토큰을 생성할때 `public_repo` ***권한만*** 주는것을 권장합니다. 추가 권한들을 주는것은 보안 이슈가 될 수 있습니다.

### 패키지 설치

이 프로젝트를 위해 필요한 패키지를 설치하려면 다음을 실행하세요:

```bash
npm install
```

### 환경 설정

`.env` 파일을 생성하고, 아래에 서술된 방법으로 토큰을 붙여넣으세요.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### 로컬 환경

Netlify Dev CLI를 사용하여 어플리케이션을 실행하세요.

```bash
$ netlify dev
```

### Does it work?

사이트는 자동적으로 [localhost:8888](http://localhost:8888) 에서 접근할 수 있습니다.

## 프로젝트에 기여하기

컨트리뷰션은 환영입니다! 자세한 내용은 [CONTRIBUTING](./CONTRIBUTING.kr.md) 파일을 참고하세요.

## 라이선스

이 프로젝트는 MIT 라이선스를 따르고 있습니다. [LICENSE](./LICENSE) 파일을 참고하세요.

## 기여자들 ✨

다음의 사람들에게 감사를 표합니다 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
    <td align="center"><a href="https://github.com/andylang8445"><img src="https://avatars2.githubusercontent.com/u/46326335?v=4" width="100px;" alt=""/><br /><sub><b>Hongjun Yun</b></sub></a><br /><a href="#translation-andylang8445" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/ianychoi"><img src="https://avatars2.githubusercontent.com/u/6965982?v=4" width="100px;" alt=""/><br /><sub><b>Ian Y. Choi</b></sub></a><br /><a href="#translation-ianychoi" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

이 프로젝트는 [all-contributors](https://github.com/all-contributors/all-contributors) 표기를 진행하고 있습닌다. 형태에 구애받지 않고, 모든 종류의 기여는 환영합니다.

## Trees > Tees

Hacktoberfest 참가자들에게: 티셔츠를 수령하는것 대신 Hacktoberfest가 주도하는 나무심기 캠패인에 동참하는것을 고려해 보세요![We need to look after our climate!](https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
