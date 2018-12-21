# (Lazy) Do notation

<img src="logo.png" width="200" height="200" />

This package provides a generator based, Fantasy Land (v3) compliant do notation for lazy monadic structures.

## Installation

```bash
npm i lazy-do
```

## Usage

```javascript
// Do :: Monad m => (() -> Iterator) -> m
const Do = require('lazy-do');
```

## Example

The following example uses the [Fluture](https://github.com/fluture-js/Fluture) library as the monad, but it can be any lazily evaluated monadic structure.

```javascript
const Do = require('lazy-do');
const Future = require('fluture');

const someFuture = Do (function* () {
  const a = yield Future.after(1000, 41);
  const b = yield Future.after(500, 1);
  return Future.of(`The answer is ${a + b}!`);
}, Future);

someFuture.fork(
  console.error,
  console.log
);
// -> The answer is 42!
```
