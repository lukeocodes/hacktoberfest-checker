# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](../../assets/images/Logo%20Sponsors%20Light.svg)

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

Il ***UNIQUEMENT*** a besoin de la portée `public_repo`. L' ajout de portées supplémentaires peut constituer un risque pour la sécurité.

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

Le site sera disponible sur [localhost:8888](http://localhost:8888) par défaut.

## Contribuant

Les contributions sont les bienvenues! Voir le fichier [CONTRIBUTING](./CONTRIBUTING.fr.md).

## Licence

Sous licence MIT. Voir le fichier [LICENSE](../../LICENSE).
