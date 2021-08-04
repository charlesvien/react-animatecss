# react-animatecss

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]

> A React component implementing the latest version of Animate.css

## Install

```bash
npm install @charlesvien/react-animatecss
```
or alternatively
```bash
yarn add @charlesvien/react-animatecss
```

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

[npm-img]:https://img.shields.io/npm/v/@charlesvien/react-animatecss
[npm-url]:https://www.npmjs.com/package/@charlesvien/react-animatecss
[build-img]:https://github.com/charlesvien/react-animatecss/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/charlesvien/react-animatecss/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@charlesvien/react-animatecss
[downloads-url]:https://www.npmtrends.com/@charlesvien/react-animatecss