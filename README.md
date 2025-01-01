# Hoarder Injector

## Introduction

Hoarder Inject is an extension that inject your bookmarks from your [Hoarder app](https://hoarder.app) into your search results.

![demo](/assets/demo.png)

### Support Search Engines

- Ecosia

## Development

### Requirements

- Node.js
- pnpm
- librsvg (for converting logo to png)


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
