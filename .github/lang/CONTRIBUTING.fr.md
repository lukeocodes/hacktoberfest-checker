# Contribuant

Si vous souhaitez contribuer, faites d'abord quelques recherches [Code of Conduct
](./CODE_OF_CONDUCT.md).

## Translations

Les traductions sont disponibles en **3** parties, que vous pouvez soumettre en une seule demande d'extraction.

### Documentation du site Web

Les fichiers de documentation du site Web existent dans le répertoire `./github/ ang`. Si vous souhaitez soumettre une traduction, veuillez inclure les fichiers 
suivants avec le [code ISO à deux lettres pour votre langue](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

z.B. chinois

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Mettez à jour les liens entre vos nouveaux fichiers `README.zh.md` et `CONTRIBUTING.zh.md` afin que cliquer sur le lien *** Contributor *** dans `README.zh.md` mène 
directement à `CONTRIBUTING.zh.md` conduit.

### i18n

Les fichiers de langue se trouvent dans le répertoire `lang/` et existent en tant que fichiers JavaScript, nommés d'après le [code iso à deux lettres de votre 
langue](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

z.B. Hindi

- `lang/hi.js`

Vous devez copier le contenu du fichier `lang/en.js` dans votre nouveau fichier de langue, puis procéder à la traduction de chaque chaîne. Veillez à ne pas casser 
les chaînes contenant des balises.

### contenu

Le contenu se trouve dans le répertoire `content/` sous un répertoire nommé d'après l'iso-code de votre langue [code iso à deux lettres pour votre langue]
(https://en.wikipedia.org/wiki/List_of_ISO_639 -1_codes).

z.B. Espagnol (continent)

- `content/es/`
 
Copiez le répertoire `content/ en/` dans votre nouveau répertoire de langue, puis procédez à la traduction de tout le contenu de ces fichiers. Veillez à ne pas 
casser le code HTML éventuellement présent. Le «frontmatter» au début des documents n'est actuellement pas utilisé, mais veuillez également le traduire.

Actuellement, les fichiers à traduire sont:

- `details.md`
- `index.md`

## Problèmes

Trouvez un "problème" et envoyez-moi un message pour plus d'informations et réclamez le "problème" pour vous-même. Ensuite, vous pouvez commencer à travailler sur votre problème et faire un PR dès que cela est fait.

Pour faire une "pull-request", veuillez vous assurer que vous "forkez" le dépôt avant de créer une nouvelle branche. VEUILLEZ NE PAS modifier votre propre branche "main" avant de mettre un "pull-reques" sur cette branche «main». En cas de doute, veuillez demander.

## Autres améliorations

Veuillez ne pas faire de demandes d'extraction à l'improviste. Veuillez signaler un problème avant de commencer à travailler sur quoi que ce soit.
