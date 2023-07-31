# Abaculater 🧮

A calculator Vue project with abacus visualisations.

## Project setup

```
npm install
```

### To develop

To compile and hot-reload for development

```
npm run serve
```

### To deploy

The project is hosted using [Github Pages](https://pages.github.com/). The changes pushed to `master` branch are automatically built and deployed using `.github/workflows/vue_build.yml`. A deployment SSH key (a.k.a [deploy key](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-create-ssh-deploy-key)) was used for authentication.

## Implementation notes

- This project uses [Vuex](https://vuex.vuejs.org/) state management pattern and library.
- Two main components are used: abacus and calculator
