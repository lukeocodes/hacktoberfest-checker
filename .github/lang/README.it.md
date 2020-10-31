# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](../../assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Il progetto è ospitato su [https://hacktoberfest.ninja](https://hacktoberfest.ninja), il sito consente di verificare se un progetto prende parte a Hacktoberfest.

## Installazione locale

Dato che il progetto è un'applicazione web decentralizzata, Netlify Dev e Netlify Functions sono neccesari per eseguire l'applicazione localmente e per usare check-repository feature del sito.

### Netlify Dev

Installa [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) per l'applicazione e Netlify Functions localmente.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Creare un Token d'Accesso Presonale

Devi creare un GitHub Token d'Accesso Presonale per poter eseguire accesso all'API di GitHub dal tuo ambiente locale.

[Segui la documentazione](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) e non dimenticarti di copiare il token prima di chiudere la pagina (sennò dovrai fare un secondo token).

Devi **_SOLTANTO_** selezionare il campo `public_repo`. Aggiungere più campi può essere un rischio per la sicurezza.

### Installazione dei pacchetti

Per installare i pacchetti richiesti per questo progetto esegui:

```bash
npm install
```

### Configurazione dell'Ambiente

Crea un file `.env` e aggiungici il tuo Token d'Accesso come è mostrato di sotto.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Fai partire il tuo Ambiente Locale

Usando la Netlify Dev CLI, fai partire l'applicazione.

```bash
$ netlify dev
```

### Come funziona?

Il sito sarà raggiungibile su [localhost:8888](http://localhost:8888) di default.

## Collaborazioni

Chiunque volesse contribuire è ben accettato! Vedi il file di [CONTRIBUZIONE](./CONTRIBUTING.it.md).

## Licenza

Il progetto è sotto la licenza MIT. Vedi il file di [LICENZA](../../LICENSE).

## Contributori ✨

Un speciale ringraziamento va a queste bellissime persone ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/lukeocodes"><img src="https://avatars0.githubusercontent.com/u/956290?v=4" width="100px;" alt=""/><br /><sub><b>Luke Oliff</b></sub></a><br /><a href="#ideas-lukeocodes" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Documentation">📖</a> <a href="#design-lukeocodes" title="Design">🎨</a></td>
    <td align="center"><a href="https://charlie.fyi"><img src="https://avatars0.githubusercontent.com/u/655807?v=4" width="100px;" alt=""/><br /><sub><b>Charlie</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=charj" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Acharj" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/RascalTwo"><img src="https://avatars0.githubusercontent.com/u/9403665?v=4" width="100px;" alt=""/><br /><sub><b>Rascal_Two</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=RascalTwo" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jason-chan-44b828190"><img src="https://avatars3.githubusercontent.com/u/46631787?v=4" width="100px;" alt=""/><br /><sub><b>Jason Chan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=Jchann24" title="Code">💻</a></td>
    <td align="center"><a href="http://www.nhcarrigan.com"><img src="https://avatars1.githubusercontent.com/u/63889819?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas Carrigan (he/him)</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=nhcarrigan" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Anhcarrigan" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/GregHolmes"><img src="https://avatars0.githubusercontent.com/u/2411269?v=4" width="100px;" alt=""/><br /><sub><b>Greg Holmes</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=GregHolmes" title="Documentation">📖</a></td>
    <td align="center"><a href="https://alhassan.best"><img src="https://avatars2.githubusercontent.com/u/23234466?v=4" width="100px;" alt=""/><br /><sub><b>Alhassan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alhassanv" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Questo progetto segue la specifica di [all-contributors](https://github.com/all-contributors/all-contributors). Contributo di qualsiasi genere è ben accettato!
