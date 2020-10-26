# Contribuir

Se estás interessado em contribuir, por favor, verifica primeiro o [Código de Conduta](./CODE_OF_CONDUCT.md).

## Traduções

As traduções existem como **3** partes, as quais podes submeter como um único pull request se quiseres.

### Documentação do website

Os ficheiros da documentação do website estão no diretório`./github/lang`. Se gostarias de submeter uma tradução, fornece por favor os seguintes ficheiros nomeados com o correto [código ISO de 2 letras da tua linguagem](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

exemplo: Chinês

- `.github/lang/README.zh.md`
- `.github/lang/CONTRIBUTING.zh.md`

Atualiza as conexões entre os novos ficheiros `README.zh.md` e `CONTRIBUTING.zh.md`de modo a que clicando no link de ***Contribuir*** dentro do `README.zh.md` vá direto para o `CONTRIBUTING.zh.md`.

### i18n

Os ficheiros da linguagem vivem dentro do `lang/` e existem sob a forma de ficheiros JavaScript nomeados pelo [código ISO de 2 letras da língua](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

exemplo: Hindi

- `lang/hi.js`

Deves copiar o `lang/en.js` para o teu novo ficheiro de linguagem e depois proceder à tradução de cada frase. Tem cuidado para não dividir frases que tenham markup incluído.

### Conteúdo

O conteúdo vive dentro do diretório `content/`, o qual está contido num outro diretório nomeado pelo [código ISO de 2 letras da língua](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

exemplo: Espanha (continente)

- `content/es/`

Deves copiar o diretório `content/en/` para o novo diretório da tua língua e só depois proceder à tradução de todo o conteúdo desses ficheiros. Tem cuidado para não quebrar nenhum do HTML que possa existir. A parte da frente no topo dos documentos não é utilizada actualmente, mas por favor traduz essa também.

Atualmente, os ficheiros a ser traduzidos são:

- `details.md`
- `index.md`

## Problemas

Por favor, procura por um problema, envia mensagem para mais informação e reclama-o como teu. Depois, podes trabalhar no problema e fazer um PR quando estiveres pronto.

Para fazer um pull request, por favor verifica que estás a fazer um fork do repositório. POR FAVOR, NÃO modifiques o teu próprio `main` branch antes de fazeres um pull request a este `main` branch. Em dúvida, pergunta!

## Outras melhorias

Por favor, não faças PRs vindos do nada. Cria um problema antes de começares a trabalhar em qualquer coisa.
