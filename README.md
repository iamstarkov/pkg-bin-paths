# pkg-bin-paths

[![NPM version][npm-image]][npm-url]
[![Unix Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> expose binary paths from object

## Install

    npm install --save pkg-bin-paths

## Usage

```js
import { pkgBinPaths, pkgBinPathsAsync } from 'pkg-bin-paths';

pkgBinPaths('unicorns'); // unicorns
pkgBinPathsAsync('unicorns')
  .then(result => console.log(result)); // unicorns
```

## API

### pkgBinPaths(input, [options])

### pkgBinPathsAsync(input, [options])

Return a promise that resolves to `result`.

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/pkg-bin-paths
[npm-image]: https://img.shields.io/npm/v/pkg-bin-paths.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/pkg-bin-paths
[travis-image]: https://img.shields.io/travis/iamstarkov/pkg-bin-paths.svg?style=flat-square&label=unix

[appveyor-url]: https://ci.appveyor.com/project/iamstarkov/pkg-bin-paths
[appveyor-image]: https://img.shields.io/appveyor/ci/iamstarkov/pkg-bin-paths.svg?style=flat-square&label=windows

[coveralls-url]: https://coveralls.io/r/iamstarkov/pkg-bin-paths
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/pkg-bin-paths.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/pkg-bin-paths
[depstat-image]: https://david-dm.org/iamstarkov/pkg-bin-paths.svg?style=flat-square
