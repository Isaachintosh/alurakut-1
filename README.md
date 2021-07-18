<p align="center">
   <img src="./.github/logo.svg" alt="dt money" width="300"/>
</p>

<p align="center">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/brfeitoza/alurakut?color=%235963C5" />
  <img alt="lastcommit" src="https://img.shields.io/github/last-commit/brfeitoza/alurakut?color=%235761C3" />
  <img alt="License" src="https://img.shields.io/github/license/brfeitoza/alurakut?color=%235E69D7" />
  <img alt="Issues" src="https://img.shields.io/github/issues/brfeitoza/alurakut?color=%235965E0">
  <a href="https://www.linkedin.com/in/brfeitoza/">
    <img alt="Bruno Feitoza" src="https://img.shields.io/badge/-brfeitoza-5965e0?style=flat&logo=Linkedin&logoColor=white" />
  </a>
  <a href="mailto:bfeitoza634cyt@gmail.com">
   <img alt="E-mail" src="https://img.shields.io/badge/-bfeitoza634cyt%40gmail.com-%23525DCB" />
  </a>
</p>

<p align="center">
  This is a clone of the nostalgic social network Orkut
</p>

<p align="center">This project was developed during the Alura Immersion with Next.js and Styled Components</p>

# Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Extra features](#extra-featuers)
- [Getting started](#getting-started)
- [Components docs](#components-docs)
- [Running tests](#running-tests)
- [Issues](#issues)
- [Contributing](#issues)
- [License](#license)

# Demo

<div align="center">
   <img src="./.github/demo.gif" width="100%">
</div>

# Technologies

This project was made using the follow technologies:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [DatoCMS](https://www.datocms.com/)
- [Yup](https://github.com/jquense/yup)
- [Nookies](https://www.npmjs.com/package/nookies)
- [Axios](https://github.com/axios/axios)
- [GraphQL Request](https://github.com/prisma-labs/graphql-request)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Husky](https://www.npmjs.com/package/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)

# Extra features

- Loading state for async information;
- Possibility to filter followers, communities and people by the menu search field;
- Modal to choose the theme, which has an integration with unsplash that searches random images as a suggestion or uploading an image from your pc;
- Fallback for images that have an invalid src, looking for a placeholder image to replace;
- Authentication with github using next-auth;
- Save selected theme in cookies (It doesn't work for pc images yet);
- Used the Theme Provider of styled-components;
- Validation with yup;
- User profile page, listing github information;
- Leave messages.

# Getting started

```bash
# Clone Repository
$ git clone https://github.com/brfeitoza/alurakut.git && cd alurakut

# Install Dependencies
$ yarn

# Fill .env.local file with YOUR environment variables, according to .env.example file.

# Run Aplication
$ yarn dev
```

Go to http://localhost:3000/ to see the application running.

# Components docs

```bash
# Run storybook
$ yarn storybook
```

# Running tests

```bash
# Run the tests
$ yarn test

# Run the tests in watch mode
$ yarn test:watch

# Run the tests and generate coverage report
$ yarn test:coverage
```

# Issues

Create a <a href="https://github.com/brfeitoza/alurakut/issues">new issue report</a>, it will be an honor to be able to help you solve and further improve our application.

# Contributing

This project follows the Angular Convention commits pattern. [Click](./commitlint.config.js) to see the available prefixes.

- Fork this repository;
- Create a new branch to develop your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: my new feature'`;
- Push to your branch: `git push origin my-feature`.

# License

This project is under the [MIT License](./LICENSE) |
Made with 💖 by [Bruno Feitoza](https://www.linkedin.com/in/brfeitoza/).
