# Hacktoberfest Checker ([https://hacktoberfest.ninja](https://hacktoberfest.ninja))
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Hacktoberfest](./assets/images/Logo%20Sponsors%20Light.svg)

Hosted at [https://hacktoberfest.ninja](https://hacktoberfest.ninja), this allows users to check if a project is taking part is Hacktoberfest.

## Local Setup

As a decoupled web application, Netlify Dev is required to run the application and the Netlify function locally and use the sites check-repository feature.

### Netlify Dev

Install [Netlify Dev](https://www.netlify.com/products/dev/#how-it-works) to the application and Netlify Functions locally.

```bash
# install Netlify Dev
$ npm install netlify-cli -g
```

### Create a Personal Access Token

You need to create a GitHub Personal Access Token to be able to access the GitHub API from your local environment.

[Follow the documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) and don't remember to copy the token before you leave the page (or you'll need to make two).

It ***ONLY*** needs the `public_repo` scope. Adding more scopes could be a security risk.

### Configure Environment

Create a `.env` file and add your access token to it as shown here.

```env
# .env
GITHUB_ACCESS_TOKEN=your_access_token_123
```

### Start the Local Environment

Using the Netlify Dev CLI, start the application.

```bash
$ netlify dev
```

### Does it work?

The site will be available on [localhost:8888](http://localhost:8888) by default.

## Contributing

Contributions welcome! See [CONTRIBUTING](./CONTRIBUTING.md) file.

## License

Licensed as MIT. See [LICENSE](./LICENSE) file.
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/RascalTwo"><img src="https://avatars0.githubusercontent.com/u/9403665?v=4" width="100px;" alt=""/><br /><sub><b>Rascal_Two</b></sub></a><br /><a href="https://github.com/lukeocodes/hacktoberfest-checker/commits?author=RascalTwo" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!