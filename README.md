# webpack-ttt
Repository for the Pass it on: **Webpack, Tips, Tricks and Tweaks**. It's mainly a frontend project that will use the webpack functional library as a git module.

## Setup
Take into account that this project was built using the latest LTS Node version available, check [.nvmrc](.nvmrc) to get the specific version.

```sh
npm install
```

### Development
A development server was configured using webpack-dev-server, at the moment HMR is disabled.

```sh
npm start
```

### Build
This will build the assets in the folder dist using the default production setup of webpack (Since webpack 4 comes with a set of presets)

```sh
npm run build
```