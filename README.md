# A Template for Lit + Tailwind + Daisy + Bun

<img src="https://github.com/lit/lit/raw/main/packages/lit/logo-dark.svg" height="25"> + <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg" height="25"> + <img src="https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" height="25"> + <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" height="25">

## Using this Repo

```bash
bun create github.com/dazraf/lit-tailwind-daisy-bun <your-directory-name>
cd <your-directory-name>
bun install
```

## Running the App

```bash
bun dev
```

## Features

- Nav Toolbar
- [Theme Selector](./src/components/ThemeSelector.ts)
- Routing for three pages using the [Lit Router](https://www.npmjs.com/package/@lit-labs/router): [`/`](./src/components/pages/HomePage.ts), [`/contact`](./src/components/pages/ContactPage.ts) and [`/about`](./src/components/pages/AboutPage.ts).
- Mixin class [`AppStyledElement.ts`](./src/components/AppStyledElement.ts) which gives you all the power of Tailwind and Daisy for Lit components
- [Bootstrap icons](https://icons.getbootstrap.com/) wrapped as a [web component](./src/components/Icon.ts)
- [Breadcrumbs](./src/components/Breadcrumbs.ts)

## Screen Shots

![](./screenshots/1.png)

![](./screenshots/2.png)

![](./screenshots/3.png)
