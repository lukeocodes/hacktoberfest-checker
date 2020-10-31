# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](../../assets/images/Logo%20Sponsors%20Light.svg)

Gehostet auf [https://hacktoberfest.ninja](https://hacktoberfest.ninja), informiert Nutzer darüber, ob ein Projekt am Hackoberfest teilnimmt.

## Lokales Setup

Als entkoppelte Webanwendung ist Netlify Dev erforderlich, um die Anwendung und die Netlify-Funktion lokal auszuführen und die sites check-repository Funktion zu nutzen.

### Netlify Dev

Installiere [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) lokal.

```bash
# installiere Netlify Dev
$ npm install netlify-cli -g
```

### Erstellen eines persönlichen Zugriffstoken

Du müssen ein GitHub Personal Access Token erstellen, um von deiner lokalen Umgebung aus auf die GitHub API zugreifen zu können.

[Hier gehts zur Dokumentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) und vergesse nicht, den Token zu kopieren, bevor du die Seite verlässt (oder du musst einen neuen erstellen).

Es wird ***nur*** die Option `public_repo` benötigt. Das Hinzufügen weiterer Optionen könnte ein Sicherheitsrisiko darstellen.

### Pakete installieren

Führe einen `npm install`aus um die erforderlichen Pakete für dieses Projekt zu installieren:

```bash
npm install
```

### Konfiguration der Umgebung

Erstelle eine `.env' Datei und füge deinen Zugriffs-Token wie hier gezeigt hinzu.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Starten deine lokale Umgebung

Starte die Anwendung mit der Netlify Dev CLI.

```bash
$ netlify dev
```

### Funktioniert es?

Die Seite ist standardmäßig unter [localhost:8888](http://localhost:8888) verfügbar.

## Beitragen

Beiträge willkommen! Siehe Datei [BEITRÄGE](./CONTRIBUTING.de.md).

## Lizenz

MIT lizenziert. Siehe Datei [LIZENZ](./LICENSE).

## Mitwirkende ✨

Dank geht an diese wunderbaren Menschen ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

Dieses Projekt folgt den Spezifikation [alle-mitwirkenden] (https://github.com/all-contributors/all-contributors). Beiträge jeder Art sind willkommen!
