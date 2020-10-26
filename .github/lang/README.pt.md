# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](/assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-15-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Alojado em [https://hacktoberfest.ninja](https://hacktoberfest.ninja), isto permite aos utilizadores verificar se um projecto está a participar no Hacktoberfest.

## Configuração Local

Como aplicação web desacoplada, Netlify Dev deve executar a aplicação e a função Netlify localmente e utilizar a função de verificação de repositório dos websites.

### Netlify Dev

Instala [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) para a aplicação, e assim, as funções do Netlify irão funcionar localmente.

```bash
# instalar Netlify Dev
$ npm install netlify-cli -g
```

### Criar um Token de acesso pessoal

Precisas de criar um token de acesso pessoal Github para conseguir aceder à Gitub API do teu ambiente local.

[Segue a documentação](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) e não te esqueças de copiar o token antes de saíres da página (ou irás precisar de criar dois).

Precisas ***SÓ*** do âmbito de `public_repo`. Adicionar mais âmbitos pode ser um risco de segurança.

### Instalar pacotes

Para instalar os pacotes necessários para este projeto, executa:

```bash
npm install
```

### Configurar ambiente

Cria um ficheiro `.env` e adiciona o teu token de acesso como mostrado aqui:

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Iniciar o Ambiente Local

Usando a Netlify Dev CLI, inicia a aplicação.

```bash
$ netlify dev
```

### Isto funciona?

O website estará disponível em [localhost:8888](http://localhost:8888) por definição.

## Contribuir

As contribuições são bem-vindas! Vê o ficheiro [CONTRIBUTING](./CONTRIBUTING.pt.md).

## Licença

Licensiado como MIT. Vê o ficheiro [LICENSE](./LICENSE).

## Contribuidores ✨

Obrigado a todas estas pessoas incríveis! ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

Este projeto segue a especificação [all-contributors](https://github.com/all-contributors/all-contributors). Contribuições de qualquer tipo são bem-vindas!

## Árvores > T-shirts

Para os participantes na Hacktoberfest: Por favor, considera optar por plantar uma árvore na Floresta Hacktoberfest em vez de pedir uma T-shirt. [Temos que olhar pelo nosso clima!](https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
