# Simple Plainly Currency Converter

With this application, you can choose your base currency and select the specific currencies you wish to convert it into. For instance, you can convert Canadian Dollars (CAD) to EURO, USD, and more. Simplify your currency conversion experience with our intuitive and efficient app.

[View the live site here](https://simple-plainly-currency-converter.netlify.app/)

## Tech Stacks

![Vuejs](https://img.shields.io/badge/Vue.js-4FC08D.svg?style=for-the-badge&logo=vuedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)

## Getting Started

- Installation
```bash
git clone git@github.com:victoriacheng15/currency-converter.git

cd currency-converter
```

- Install packages
```bash
npm install 
```

- Run the app
```bash
npm run dev 
```

## What I have learned

This project aims to familiarize myself with Vue syntax related to loops, conditionals (if and else), and Panda CSS.

Computed: this is to monitor changes in the list of desired currencies, and it specifically re-filters the list each time a new base currency is selected. For instance, when a user opts for `CAD` as the base currency and selects additional currencies for conversion, the computed property ensures that `CAD` is automatically excluded from the updated list.

Watchers: it is to watch changes in the list of the user selected currencies, once the new base currency is changed, it should re-filter user selected currencies.

Slots: the slot functionality provides a designated space for components. If the slot remains empty, nothing will be displayed until new elements or components are added. In certain cases, a component may have more than one slot. The second slot can be named, allowing it to be referenced specifically when needed, providing flexibility in component layout.

## Author

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/victoriacheng15/)