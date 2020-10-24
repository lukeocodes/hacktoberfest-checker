# Vérificateur Hacktoberfest ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

#### _Lisez ceci en [autres langues](TRANSLATIONS.md)._

<kbd>[langue Anglaise](./README.es.md)</kbd> | <kbd>[l'Espagnol](./.github/lang/README.es.md)</kbd> | <kbd>[ | <kbd>[allemande](./.github/lang/README.de.md)</kbd>

![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Hébergé à [https://hacktoberfest.ninja](https://hacktoberfest.ninja), cela permet aux utilisateurs de vérifier si un projet participe est Hacktoberfest.

## Configuration locale

En tant qu'application Web découplée, Netlify Dev doit exécuter l'application et la fonction Netlify localement et utiliser la fonction de vérification-référentiel de sites.

### Netlify Dev

Installez [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) à l'application et aux fonctions Netlify localement.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Créer un jeton d'accès personnel

Vous devez créer un jeton d'accès personnel GitHub pour pouvoir accéder à l'API GitHub à partir de votre environnement local.

[Suivez la documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) et n'oubliez pas de copier le jeton avant de quitter la page (ou vous devrez en créer deux).

Il *** UNIQUEMENT *** a besoin de la portée `public_repo`. L' ajout de portées supplémentaires peut constituer un risque pour la sécurité.

### Installer des packages

Pour installer les packages requis pour ce projet, exécutez:

```bash
npm install
```

### Configurer l'environnement

Créez un fichier `.env` et ajoutez-y votre jeton d'accès comme indiqué ici.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Démarrez l'environnement local

À l'aide de l'interface de ligne de commande Netlify Dev, démarrez l'application.

```bash
$ netlify dev
```

### Est-ce que ça marche?

Le site sera disponible sur [localhost: 8888] (http: // localhost: 8888) par défaut.

## Contribuant

Les contributions sont les bienvenues! Voir le fichier [CONTRIBUTING] (./ CONTRIBUTING.md).

## Licence

Sous licence MIT. Voir le fichier [LICENSE] (./ LICENSE).

## contributeurs ✨

Merci à ces gens merveilleux ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

Ce projet suit la spécification [tous les contributeurs] (https://github.com/all-contributors/all-contributors). Contributions de toute nature bienvenues!
