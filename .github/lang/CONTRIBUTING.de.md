# Beitragend

Wenn du daran interessiert bist, einen Beitrag zu leisten, informiere dich bitte zuerst [Code of Conduct](./CODE_OF_CONDUCT.md).

## Übersetzungen

Übersetzungen liegen in **3** Teilen vor, die du nach Belieben als einzelne Pull-Anfrage einreichen kannst.

### Websiten-Dokumentation

Website-Dokumentationsdateien existieren unter der `./github/lang` Verzeichnis. Wenn du eine Übersetzung einreichen möchtest, gebe bitte die folgenden Dateien mit dem korrekten [Zwei-Buchstaben-Iso-Code für deine Sprache](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) an.

z.B. Chinesisch

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Aktualisiere die Links zwischen deinen neuen `README.zh.md` und `CONTRIBUTING.zh.md` Dateien, so dass ein Klick auf den ***Mitwirkende*** Link innerhalb von `README.zh.md` direkt auf `CONTRIBUTING.zh.md` führt.

### i18n

Sprachdateien liegen innerhalb des `lang/` Verzeichnis und existieren als JavaScript-Datei, benannt nach dem [Zwei-Buchstaben-Iso-Code für deine Sprache](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

z.B. Hindi

- `lang/hi.js`

Du solltest den Inhalt der Datei `lang/en.js` in deine neue Sprachdatei kopieren und dann damit fortfahren, jede Zeichenkette zu übersetzen. Achten dabei darauf, keine Zeichenketten kaputt zu machen, in denen Markup enthalten ist.

### Inhalt

Der Inhalt Liegt im Verzeichnis `content/` unter einem Verzeichnis, das nach dem iso-code für deine Sprache benannt ist [Zwei-Buchstaben-Iso-Code für deine Sprache](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

z.B. Spanisch (Festland)

- `content/es/`

Kopiere das Verzeichnis `content/en/` in dein neues Sprachverzeichnis, und fahre dann damit fort, den gesamten Inhalt dieser Dateien zu übersetzen. Achte darauf, nichts von dem eventuell vorhandenen HTML kaputt zu machen. Die 'frontmatter' am Anfang der Dokumente wird aktuell nicht verwendet, aber bitte übersetze ihn auch.

Derzeit sind die zu übersetzenden Dateien:

- `details.md`
- `index.md`

## Probleme

Suche dir ein "issue", und Schicke mir eine Nachricht für weitere Informationen und beanspruche das "issue" für dich. Dann kannst du beginnen an deinem "issue" zu arbeiten und eine PR machen, sobald es fertig ist.

Um einen "pull-request" zu stellen, vergewissere dich bitte, dass das du das repository "forkst", bevor du einen neuen branch erstellst. Modifiziere BITTE NICHT deinen eigenen "main" branch, bevor du einen "pull-reques" auf diesen `main` branch stellst. Im Zweifelsfall frage bitte nach.

## Andere Verbesserungen

Bitte stelle keine pull-requests aus heiterem Himmel. Bitte spreche  ein Problem an, bevor du beginnst an etwas zu arbeiten.