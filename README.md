# react-animatecss

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Build Status][build-img]][build-url]

> A React component implementing the latest version of [Animate.css](https://animate.style)!

- **Zero dependencies** - All self contained code
- **Minimal package size** - <1 kB gzipped
- **No messy installation** - A simple way to add motion to your react components

## Demo

[Take a look at the demo](https://react-animatecss.com/)

## Installation

```bash
# with npm
npm install @charlesvien/react-animatecss

# with yarn
yarn add @charlesvien/react-animatecss
```

## Documentation

The official Animate.css documentation can be found at https://animate.style. You can view a list of all animations that your able to use with this component on their website.

## Usage

This is a basic example showing how to add a fadeIn and fadeOut animation to a component.

**NOTE:** In order for the fadeOut animation to occur, instead of conditionally rendering the component you must pass ``false`` to the ``visible`` prop when the component should no longer be visible.

```js
import Animate from '@charlesvien/react-animatecss';

<Animate
  animationIn="fadeIn"
  animationOut="fadeOut"
  inDuration={1000}
  outDuration={1000}
  visible
>
  Magnolia
</Animate>
```

## API

| Prop         | Type     | Default     | Description                                                          |
|--------------|----------|-------------|----------------------------------------------------------------------|
| animationIn  | string   | fadeIn      | The animation name to be played when the component turns visible     |
| animationOut | string   | fadeOut     | The animation name to be played when the component turns invisible   |
| inDelay      | number   | 0           | The delay before the visible animation is played                     |
| outDelay     | number   | 0           | The delay before the invisible animation is played                   |
| inDuration   | number   | 1000        | The duration the visible animation is played                         |
| outDuration  | number   | 1000        | The duration the invisible animation is played                       |
| repeat       | number   | 0           | How many times the animation repeats (min: 1, max: 3)                |
| onMount      | boolean  | true        | If the animation should play when the component is first mounted     |
| visible      | boolean  | true        | If the Animate component should be visible                           |
| loop         | boolean  | false       | If the animation should infinitely loop                              |
| style        | object   | _undefined_ | Additional optional css properties to apply to the Animate container |

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