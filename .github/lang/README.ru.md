# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

Проводится на [https://hacktoberfest.ninja](https://hacktoberfest.ninja). Это позволяет пользователем узнать, учавсвует ли проект в Хактоберфесте.

## Локальная Настройка

В качестве раздельного веб приложения Netlify Dev требуется для запуска приложения. Так же Netlify функционирует локально и использует функцию проверки-репозитория сайтов. 

### Netlify Dev

Установить [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) к приложению и Netlify Functions локально.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Создание Персонального Токена Доступа

Вам необходимо создать Персональный Токен Доступа GitHub чтобы получить доступ к GitHub API из вашей локальной среды.

[Следуйте документации](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) и не забудьте скопировать токен до того как покинете страницу (иначе вам придётся создать 2 токен). 

Ему требуется ***ТОЛЬКО*** области `public_repo`. Добавление дополнительной области может привести к угрозе безопастности.

### Установочные Комплекты

Для установки набора необходимого для этого проекта запустите:

```bash
npm install
```

### Настройка Среды

Создайте `.env` файл и добавьте для него токен доступа, как показано ниже.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Запуск Локальной Среды

Использую Netlify Dev CLI, запустите приложение.

```bash
$ netlify dev
```

### Запустилось ли приложение?

Сайт будет доступен по адресу [localhost:8888](http://localhost:8888) по умолчанию.

## Содействие Проекту

Любая помощь приветствуется! Смотрите файл [СОДЕЙСТВИЕ ПРОЕКТУ](./CONTRIBUTING.ru.md).

## Лицензия

Лицензированно как MIT. Смотрите файл [ЛИЦЕНЗИЯ](./LICENSE).

## Contributors ✨
Благодарности выражаются этим прекрасным людям ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
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
    <td align="center"><a href="https://alvaro.codes"><img src="https://avatars1.githubusercontent.com/u/28715114?v=4" width="100px;" alt=""/><br /><sub><b>Álvaro Artano</b></sub></a><br /><a href="#translation-alvaroartano" title="Translation">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alvaroartano" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bedav.org"><img src="https://avatars2.githubusercontent.com/u/46835608?v=4" width="100px;" alt=""/><br /><sub><b>Shreyas Sreenivas</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Ashreyas44" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://mananchawla.ml"><img src="https://avatars3.githubusercontent.com/u/42414965?v=4" width="100px;" alt=""/><br /><sub><b>Manan Chawla</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Amananchawla2005" title="Bug reports">🐛</a> <a href="#design-mananchawla2005" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/gregorygregio"><img src="https://avatars2.githubusercontent.com/u/16940557?v=4" width="100px;" alt=""/><br /><sub><b>Gregory Gregio</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=gregorygregio" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://leobia.github.io/"><img src="https://avatars2.githubusercontent.com/u/26444579?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Aleobia" title="Bug reports">🐛</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=leobia" title="Code">💻</a></td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
Этот проект следует [все-участники](https://github.com/all-contributors/all-contributors) спецификации. Любая помощь приветствуется!

## Деревья > Tees

Для участников Hacktoberfest: пожалуйста рассматривайте возможность учавсвтвовать в программе посадки деревьев от вашего имени в Hacktoberfest Forest вместо того, чтобы брать футболку. [Мы должны следить за нашим климатом!](https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
