# CRA 5, Tailwind 3, Storybook 5

- Tailwind is now by default built

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
