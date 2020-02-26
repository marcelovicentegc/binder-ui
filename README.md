# binder-ui

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://binder-ui.netlify.com/) [![npm version](https://badge.fury.io/js/%40binder%2Fui.svg)](https://www.npmjs.com/package/@binder/ui)

## 📦 Install

`npm i @binder/ui`

`yarn add @binder/ui`

## 🔨 Usage

```typescript
import {
  ThemeProvider,
  theme,
  Button,
  ButtonType,
  SearchBar
} from "@binder/ui";

const App = () => (
  <ThemeProvider theme={theme}>
    <SearchBar />
    <Button label="Press me!" buttonType={ButtonType.primary} />
  </ThemeProvider>
);
```

## ⬆️ Development directions

1. Clone this repo: `git clone https://github.com/marcelovicentegc/binder-ui.git`
2. cd into it: `cd binder-ui`
3. Install its dependencies (use npm): `npm i`
4. Run the application: `npm start`

## 🤝 Contributing

1. Create your own branch from `develop`
2. Make the changes you wish
3. Write or rewrite the unit tests, if necessary
4. Document what has been altered on storybook, if necessary
5. Open a pull request pointing to `develop`
6. That's it! 🤓
