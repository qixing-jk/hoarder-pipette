# Hoarder's Pipette

## Introduction

Hoarder's Pipette is a Chrome extension that injects your bookmarks from your [Hoarder app](https://hoarder.app) into your search results. This helps you avoid missing relevant information that you might have already saved in your bookmarks. 

![demo](/assets/demo.png)

Hoarder's Pipette integrates directly with the Hoarder app by utilizing its API. 

### Support Search Engines

- Google
- Ecosia

I plan to add support for more search engines in the future. If you'd like to see support for a specific search engine, please open an issue on this repository.

## Installation

Please visit the [document site](https://dansnow.github.io/hoarder-pipette/guides/installation/)

## Development

### Requirements

- Node.js
- pnpm
- librsvg (for converting logo to png)
- imagick (for processing logo)


### Available Scripts

In the project directory, you can run the following scripts:

#### pnpm dev

**Development Mode**: This command runs your extension in development mode. It will launch a new browser instance with your extension loaded. The page will automatically reload whenever you make changes to your code, allowing for a smooth development experience.

```bash
pnpm dev
```

#### pnpm start

**Production Preview**: This command runs your extension in production mode. It will launch a new browser instance with your extension loaded, simulating the environment and behavior of your extension as it will appear once published.

```bash
pnpm start
```

#### pnpm build

**Build for Production**: This command builds your extension for production. It optimizes and bundles your extension, preparing it for deployment to the target browser's store.

```bash
pnpm build
```

## Credits

- Inspired by https://github.com/fivefold/linkding-injector
- Based on the [Extension.js](https://extension.js.org) framework
