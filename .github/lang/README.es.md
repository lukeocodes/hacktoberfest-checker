# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

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
