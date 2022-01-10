# CRA 5, Tailwind 3, Storybook 5

## What's new in CRA 5?

- builtin tailwind
- webpack 5

### Getting started with Tailwind

- run the following

```bash
$ npx create-react-app --template=typescript my-app
$ code my-app
$ npm i -D @types/tailwindcss
$ npx tailwindcss init -p
```

- update the tailwind.config.js and add the following imports in the index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Getting started with Storybook

- run the following

```bash
$ npx sb init
$ npm i -D @storybook/builder-webpack5 @storybook/manager-webpack5
```

- update .storybook/main.js

```bash
$ npm run storybook
```
