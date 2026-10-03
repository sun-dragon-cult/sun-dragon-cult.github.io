# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm i
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are
reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static
contents hosting service, or by running `pnpm serve`.

### Deployment

The site deploys to GitHub Pages automatically on every push to `main`
(`.github/workflows/deploy.yml`). Pull requests from this repo get a preview at
`https://sun-dragon-cult.github.io/pr-preview/pr-<number>/`, linked in a comment on the PR
(`.github/workflows/preview.yml`).

Don't run `pnpm deploy` by hand: it force-pushes the `gh-pages` branch and deletes the open PR
previews.
