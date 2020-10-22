# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Hacktoberfest](../../assets/images/Logo%20Sponsors%20Light.svg)

Alojado en [https://hacktoberfest.ninja](https://hacktoberfest.ninja), esto permite a los usuarios saber si un proyecto está participando en el hacktoberfest.

## Instalación local

Como es una aplicación web desacoplada, Netlify Dev es necesario para iniciar la aplicación, la función local de Netlify y para que el sitio pueda ejecutar la función para comprobar el repositorio correctamente.

### Netlify Dev

Instalar [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) a la aplicación y las funciones de Netflify localmente.

```bash
# instalar Netlify Dev
$ npm install netlify-cli -g
```

### Crear un token de acceso personal

Necesitas crear un Token Personal de GitHub Access para poder acceder a la API de GitHub localmente.

[Sigue los pasos de la documentación](https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) y no te olvides copiar el token antes de salir de la página (o tendrás que crear otro).

***SOLO*** necesita el permiso `public_repo`. Añadir más podría causar graves fallos de seguridad.

### Instalar dependencias.

Para instalar las dependencias necesarias para este proyecto, ejecuta:

```bash
npm install
```

### Configurar el entorno

Crea un archivo `.env` y añade tu token tal que así.

```env
# .env
GITHUB_ACCESS_TOKEN=tu_token_de_acceso_123
```

### Ejecutar el entorno local

Usando el CLI de Netlify Dev, inicia la aplicación.

```bash
$ netlify dev
```

### Como funciona?

Podrás acceder al sitio en la dirección [localhost:8888](http://localhost:8888) por defecto.

## Contribuir

Las contribuiciones son bienvenidads! Mira el archivo [CONTRIBUTING](./CONTRIBUTING.es.md).

## Licencia

Licenciado como MIT. Mira el archivo [LICENSE](../../LICENSE).
## Contribuidores ✨

Muchas gracias a estas personas maravillosas ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

Este proyecto sigue las [especificaciones "all-contributors"](https://github.com/all-contributors/all-contributors). Cualquier aporte es bienvenido!
