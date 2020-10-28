# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))

![Hacktoberfest](/assets/images/Logo%20Sponsors%20Light.svg)

Alojado em [https://hacktoberfest.ninja](https://hacktoberfest.ninja), isto permite aos utilizadores verificar se um projecto está a participar no Hacktoberfest.

## Configuração Local

Como aplicação web desacoplada, Netlify Dev deve executar a aplicação e a função Netlify localmente e utilizar a função de verificação de repositório dos websites.

### Netlify Dev

Instala [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) para a aplicação, e assim, as funções do Netlify irão funcionar localmente.

```bash
# instalar Netlify Dev
$ npm install netlify-cli -g
```

### Criar um Token de acesso pessoal

Precisas de criar um token de acesso pessoal Github para conseguir aceder à Gitub API do teu ambiente local.

[Segue a documentação](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) e não te esqueças de copiar o token antes de saíres da página (ou irás precisar de criar dois).

Precisas ***SÓ*** do âmbito de `public_repo`. Adicionar mais âmbitos pode ser um risco de segurança.

### Instalar pacotes

Para instalar os pacotes necessários para este projeto, executa:

```bash
npm install
```

### Configurar ambiente

Cria um ficheiro `.env` e adiciona o teu token de acesso como mostrado aqui:

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Iniciar o Ambiente Local

Usando a Netlify Dev CLI, inicia a aplicação.

```bash
$ netlify dev
```

### Isto funciona?

O website estará disponível em [localhost:8888](http://localhost:8888) por definição.

## Contribuir

As contribuições são bem-vindas! Vê o ficheiro [CONTRIBUTING](./CONTRIBUTING.pt.md).

## Licença

Licensiado como MIT. Vê o ficheiro [LICENSE](./LICENSE).

## Árvores > T-shirts

Para os participantes na Hacktoberfest: Por favor, considera optar por plantar uma árvore na Floresta Hacktoberfest em vez de pedir uma T-shirt. [Temos que olhar pelo nosso clima!](https://www.wwf.org.uk/updates/david-attenborough-life-our-planet)
