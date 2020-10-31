# Bijdragen

Als u geïnteresseerd bent om een ​​bijdrage te leveren, informeer uzelf dan eerst naar [Code of Conduct] (./CODE_OF_CONDUCT.md).

## Vertalingen

Vertalingen zijn beschikbaar in ** 3 ** delen, die u als een enkele pull-aanvraag kunt indienen.

### Website documentatie

Documentatiebestanden voor websites bevinden zich in de directory `./Github/lang`. Als u een vertaling wilt indienen, voeg dan de volgende bestanden toe met de juiste [tweeletterige ISO-code voor uw taal] (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

bijv. Chinees

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Update de links tussen uw nieuwe `README.zh.md` en `CONTRIBUTING.zh.md` bestanden zodat een klik op de *** Bijdragende *** link binnen` README.zh.md` direct leidt naar `CONTRIBUTING.zh.md` leads.

### i18n

Taalbestanden bevinden zich in de directory `lang /` en bestaan ​​als JavaScript-bestanden, genoemd naar de [tweeletterige isocode voor uw taal] (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

bijv. Hindi

- `lang/hi.js`

U dient de inhoud van het `lang/en.js`-bestand naar uw nieuwe taalbestand te kopiëren en vervolgens elke string te vertalen. Pas op dat u geen tekenreeksen breekt die opmaak bevatten.

### Inhoud

De inhoud bevindt zich in de map `content/` onder een map die is genoemd naar de isocode voor uw taal [tweeletterige isocode voor uw taal] (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

bijv. Spaans (vasteland)

- `content/es/`

Kopieer de map `content/en/` naar uw nieuwe taalmap en ga verder met het vertalen van de volledige inhoud van deze bestanden. Pas op dat u de aanwezige HTML niet breekt. De 'frontmatter' aan het begin van de documenten wordt momenteel niet gebruikt, maar vertaal deze aub ook.

Momenteel zijn de te vertalen bestanden:

- `details.md`
- `index.md`

## Problemen

Zoek een "probleem" en stuur me een bericht voor meer informatie en claim het "probleem" voor jezelf. Dan kun je aan je probleem beginnen en een PR doen zodra het klaar is.

Om een ​​"pull-request" te doen, moet u ervoor zorgen dat u de repository "fork" voordat u een nieuwe branch maakt. GELIEVE uw eigen "hoofd" branch NIET te wijzigen voordat u een "pull-request" op deze "hoofd" branch hebt geplaatst. Vraag ernaar bij twijfel.

## Andere verbeteringen

Doe alsjeblieft niet zomaar een pull-aanvraag. Meld een probleem voordat u ergens aan gaat werken.