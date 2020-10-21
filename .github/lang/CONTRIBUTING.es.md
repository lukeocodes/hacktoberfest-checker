# Contribuir

Si estás interesado en contribuir, lee el [código de conducta](/../CODE_OF_CONDUCT.md) antes de hacerlo.

## Traducir

Las traducciones consisten en **3** partes, cuales puedes enviar en cuantas "pull requests" como tu quieras..

### Documentación

La documentación del sitio está situada en el directorio `./github/lang`. Si te gustaría hacer una traducción, envía los archivos con los [códigos iso correctos correspondientes a tu país](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

ej. Chino

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Cambia los links entre `README.zh.md` y `CONTRIBUTING.zh.md` para que cuando cliques el link ***Contribuir*** dentro de `README.zh.md` vaya directo a `CONTRIBUTING.zh.md`.

### i18n

Los archivos de idiomas están ubicados en la carpeta `lang/` y está nombrado como un archivo JavaScript después de [las dos letras ISO correspondientes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

ej. Hindú

- `lang/hi.js`

Tendrías que copiar `lang/en.js` al archivo de tu idioma, para luego traducir todo. Ten cuidado de no "romper" ninguna cadena de texto que tenga markup en ellas.

### Contenido

Los archivos de contenido están situados en la carpeta `content/` y despúes, dentro de otra carpeta con los [códigos ISO correspondientes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Y

ej. Español (mainland)

- `content/es/`

Tendrías que copiar la carpeta `content/en/` a la carpeta creada con los códigos ISO del país correspondiente, y luego traducir todos los archivos dentro de ellos. Hay que tener cuidado de no romper cualquier código HTML que haya dentro de esos archivos. El "frontmatter" que está al inicio de los documentos no se usa actualmente, pero traduce eso tambien, por favor..

Actualmente, los archivos a traducir son:

- `details.md`
- `index.md`

## Fallos

Por favor, si encuentras un fallo, escríbeme para más información. Luego puedes hacer una PR y trabajar en ello.

Para hacer una PR, asegurate de que estás en el repositorio correcto. POR FAVOR NO modifiques tu propia rama `main` antes de hacer la pull request a la rama `main`. En caso de tener cualquier duda, escríbeme.

## Otras mejoras

Por favor no abras una PR antes de nada. Abre un reporte de fallo antes de trabajar con nada.