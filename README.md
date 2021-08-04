# react-animatecss

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Build Status][build-img]][build-url]

> A React component implementing the latest version of Animate.css

- **Zero dependencies** - All self contained code
- **Minimal package size** - <1 kB gzipped
- **No messy installation** - A simple way to add motion to your react components

## Installation

```bash
# With npm
npm install @charlesvien/react-animatecss

# With Yarn
yarn add @charlesvien/react-animatecss
```

## Documentation

The official Animate.css documentation can be found at https://animate.style. You can view a list of all animations that your able to use with this component on their website.

The documentation for this project, react-animatecss can be found at https://react-animatecss.com.

## Usage

```js
import Animate from '@charlesvien/react-animatecss';

<Animate
  animationIn="fadeIn"
  animationOut="fadeOut"
  inDelay={0}
  outDelay={0}
  inDuration={1000}
  outDuration={1000}
  repeat={1000}
  onMount
  visible
  loop
  style
>
  Magnolia
</Animate>
```

## Development

Contributations are welcome to react-animatecss!

To set up the project:

1.  Fork and clone the repository
2.  `$ yarn`
3.  `$ yarn dev`

Storybook will then be served on http://localhost:6006/ in watch mode, meaning you don't have refresh the page to see your changes.

[npm-img]:https://img.shields.io/npm/v/@charlesvien/react-animatecss
[npm-url]:https://www.npmjs.com/package/@charlesvien/react-animatecss
[build-img]:https://github.com/charlesvien/react-animatecss/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/charlesvien/react-animatecss/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@charlesvien/react-animatecss
[downloads-url]:https://www.npmtrends.com/@charlesvien/react-animatecss