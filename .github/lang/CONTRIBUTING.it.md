# Come Contribuire

Se sei interessato a contribuire, ti suggerisco prima di consultare [Code of Conduct](../../CODE_OF_CONDUCT.md).

## Traduzione

La traduzione del materiale può essere divisa in **3** parti, che può essere inviata come un singolo pull-request se preferisci.

### Documentazione del Sito

I file della documentazione del sito si trovano nella cartella `./github/lang` . Se desideri di inviare una tua traduzione, perfavore forinisci i file elencati di sotto con il corretto [iso-code a due lettere della tua lingua](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

per esempio i nomi dei file in Cinese

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Aggiorna i collegamenti tra i tuoi nuovi file `README.zh.md` e `CONTRIBUTING.zh.md` cosicché premendo su ***CONTRIBUZIONE*** dentro il file `README.zh.md` ti reindirizza direttamente nel file `CONTRIBUTING.zh.md`.

### i18n

I file presenti dentro `lang/` sono dei file JavaScript rinominati con il opportuno [iso-code a due lettere della tua lingua](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

per esempio i nomi dei file in Hindi

- `lang/hi.js`

Devi copiare tutto il contenuto del file `lang/en.js` e incollarlo nel nuovo file della tua lingua, cosi puoi procedere con la traduzione di ciascuna frase. Attento a non rovinare le frasi che hanno incluso un markup particolare.

### Contenuto

Il contenuto si trova nella cartella `content/` che contiene delle sottocartelle chiamate con [iso-code a due lettere della lingua opportuna](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Y

per esempio la cartella in lingua Spagnola (mainland)

- `content/es/`

Devi copiare tutti file contenuti nella cartella `content/en/` nella tua nuova cartella della rispettiva lingua, per dopo procedere con con la traduzione di tutto il contenuto dei file. Per favore state attenti al possibile codice HTML presente nei file. Il frontmatter all'inizio del documento attualmente non è utilizzato, pero devono essere tradotti lo stesso.

Attualmente i file che devono essere tradotti sono:

- `details.md`
- `index.md`

## Problemi/Errori

Se trovi un problema/errore, contattami per maggiori informazioni, e reclamalo come il tuo. Dopodichè puoi lavorarci sopra, e creare un PR quando è pronto.

Per creare un pull-request, per favore assicurati di aver fatto un fork prima di continuare con la creazione del tuo branch. VI PREGO DI NON modificare il vostro `main` branch prima di creare un pull-request a questo `main` branch. Se avete dei dubbi, potete tranquillamente farmi una domanda.

## Altri possibili miglioramenti

Vi prego di non creare un pull-requests di punto in bianco. Per favore prima di lavorare su qualsiasi miglioramento create un Issue su GitHub.