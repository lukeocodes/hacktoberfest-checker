# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

#### _Lees dit in [andere talen](TRANSLATIONS.md)._

<kbd>[Deutsch](./.github/lang/README.de.md)</kbd> | 
<kbd>[English](./README.es.md)</kbd> | 
<kbd>[Português](./.github/lang/README.pt.md)</kbd> | 
<kbd>[Española](./.github/lang/README.es.md)</kbd> | 
<kbd>[Française](./.github/lang/README.fr.md)</kbd> | 
<kbd>[हिंदी](./.github/lang/README.hi.md)</kbd>

![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-18-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Gehost op [https://hacktoberfest.ninja](https://hacktoberfest.ninja) dit stelt gebruikers in staat om te controleren of een project deelneemt Hacktoberfest is.

## Lokale installatie

Als een ontkoppelde webapplicatie is Netlify Dev vereist om de applicatie en de Netlify-functie lokaal uit te voeren en de site check-repository-functie te gebruiken.

### Netlify Dev

Installeer [Netlify Dev] (https://www.netlify.com/products/dev/#how-it-works) in de applicatie en Netlify Functions lokaal.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Maak een persoonlijk toegangstoken

U moet een GitHub Personal Access Token maken om toegang te krijgen tot de GitHub API vanuit uw lokale omgeving.

[Volg de documentatie](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) en vergeet niet om het token te kopiëren voordat je de pagina verlaat (of je moet er twee maken).

Het heeft ***ALLEEN*** de `public_repo` scope nodig. Het toevoegen van meer bereiken kan een beveiligingsrisico vormen.

### Installeer Packages

Om de pakketten te installeren die nodig zijn voor dit project, voer je uit:

```bash
npm install
```

### Configureer Environment

Maak een `.env` bestand en voeg uw toegangstoken eraan toe zoals hier getoond.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Start het lokaal Environment

Start de applicatie met behulp van de Netlify Dev CLI.

```bash
$ netlify dev
```

### Werkt het?

De site zal standaard beschikbaar zijn op [localhost: 8888] (http: // localhost: 8888).

## Bijdragende

Bijdragen welkom! Zie [CONTRIBUTING] (./ CONTRIBUTING.md) bestand.

## Licentie

Licentie verleend als MIT. Zie [LICENSE] (./ LICENSE) -bestand.

## Bijdragende ✨

Met dank aan deze geweldige mensen ([emoji key] (https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/lukeocodes"><img src="https://avatars0.githubusercontent.com/u/956290?v=4" width="100px;" alt=""/><br /><sub><b>Luke Oliff</b></sub></a><br /><a href="#ideas-lukeocodes" title="Ideeën, planning en feedback">🤔</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=lukeocodes" title="Documentatie">📖</a> <a href="#design-lukeocodes" title="Ontwerp">🎨</a></td>
    <td align="center"><a href="https://charlie.fyi"><img src="https://avatars0.githubusercontent.com/u/655807?v=4" width="100px;" alt=""/><br /><sub><b>Charlie</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=charj" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Acharj" title="Foutmeldingen">🐛</a></td>
    <td align="center"><a href="https://github.com/RascalTwo"><img src="https://avatars0.githubusercontent.com/u/9403665?v=4" width="100px;" alt=""/><br /><sub><b>Rascal_Two</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=RascalTwo" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jason-chan-44b828190"><img src="https://avatars3.githubusercontent.com/u/46631787?v=4" width="100px;" alt=""/><br /><sub><b>Jason Chan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=Jchann24" title="Code">💻</a></td>
    <td align="center"><a href="http://www.nhcarrigan.com"><img src="https://avatars1.githubusercontent.com/u/63889819?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas Carrigan (he/him)</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=nhcarrigan" title="Code">💻</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Anhcarrigan" title="Foutmeldingen">🐛</a> <a href="#ideas-nhcarrigan" title="Ideeën, planning en feedback">🤔</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=nhcarrigan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/GregHolmes"><img src="https://avatars0.githubusercontent.com/u/2411269?v=4" width="100px;" alt=""/><br /><sub><b>Greg Holmes</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=GregHolmes" title="Documentatie">📖</a></td>
    <td align="center"><a href="https://alhassan.best"><img src="https://avatars2.githubusercontent.com/u/23234466?v=4" width="100px;" alt=""/><br /><sub><b>Alhassan</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alhassanv" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Pandz18"><img src="https://avatars1.githubusercontent.com/u/58665834?v=4" width="100px;" alt=""/><br /><sub><b>Pandz18</b></sub></a><br /><a href="#translation-Pandz18" title="Vertaling">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=Pandz18" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.wanjarunkel.de"><img src="https://avatars2.githubusercontent.com/u/29057144?v=4" width="100px;" alt=""/><br /><sub><b>Wanja Runkel</b></sub></a><br /><a href="#translation-wrunkel" title="Vertaling">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=wrunkel" title="Documentation">📖</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Awrunkel" title="Foutmeldingen">🐛</a></td>
    <td align="center"><a href="https://sudipto.ghosh.pro"><img src="https://avatars3.githubusercontent.com/u/11232940?v=4" width="100px;" alt=""/><br /><sub><b>Sudipto Ghosh</b></sub></a><br /><a href="#translation-sudiptog81" title="Vertaling">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=sudiptog81" title="Documentation">📖</a></td>
    <td align="center"><a href="https://alvaro.codes"><img src="https://avatars1.githubusercontent.com/u/28715114?v=4" width="100px;" alt=""/><br /><sub><b>Álvaro Artano</b></sub></a><br /><a href="#translation-alvaroartano" title="Vertaling">🌍</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=alvaroartano" title="Documentatie">📖</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Aalvaroartano" title="Foutmeldingen">🐛</a></td>
    <td align="center"><a href="http://bedav.org"><img src="https://avatars2.githubusercontent.com/u/46835608?v=4" width="100px;" alt=""/><br /><sub><b>Shreyas Sreenivas</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Ashreyas44" title="Foutmeldingen">🐛</a></td>
    <td align="center"><a href="https://mananchawla.ml"><img src="https://avatars3.githubusercontent.com/u/42414965?v=4" width="100px;" alt=""/><br /><sub><b>Manan Chawla</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Amananchawla2005" title="Foutmeldingen">🐛</a> <a href="#design-mananchawla2005" title="Ontwerp">🎨</a></td>
    <td align="center"><a href="https://github.com/gregorygregio"><img src="https://avatars2.githubusercontent.com/u/16940557?v=4" width="100px;" alt=""/><br /><sub><b>Gregory Gregio</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=gregorygregio" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://leobia.github.io/"><img src="https://avatars2.githubusercontent.com/u/26444579?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/issues?q=author%3Aleobia" title="Foutmeldingen">🐛</a> <a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=leobia" title="Code">💻</a></td>
    <td align="center"><a href="https://cristianbgp.com"><img src="https://avatars0.githubusercontent.com/u/8507974?v=4" width="100px;" alt=""/><br /><sub><b>Cristian Granda</b></sub></a><br /><a href="#translation-cristianbgp" title="Vertaling">🌍</a></td>
    <td align="center"><a href="https://github.com/saxocat"><img src="https://avatars3.githubusercontent.com/u/73019845?v=4" width="100px;" alt=""/><br /><sub><b>João</b></sub></a><br /><a href="#translation-saxocat" title="Vertaling">🌍</a></td>
    <td align="center"><a href="https://github.com/LIMUNADE"><img src="https://avatars2.githubusercontent.com/u/20593218?v=4" width="100px;" alt=""/><br /><sub><b>Semyon Banser</b></sub></a><br /><a href="#translation-LIMUNADE" title="Vertaling">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Dit project volgt de specificatie [all-contributors] (https://github.com/all-contributors/all-contributors). Bijdragen van welke aard dan ook welkom!

## Trees > Tees

Voor Hacktoberfest-deelnemers: overweeg om ervoor te zorgen dat u namens u een boom plant in het Hacktoberfest-bos in plaats van een T-shirt te claimen. [We moeten voor ons klimaat zorgen!] (Https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
