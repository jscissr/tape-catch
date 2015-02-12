# tape-catch-onerror (fork of [tape-catch](https://github.com/michaelrhodes/tape-catch))
tape-catch is a wrapper around [tape](https://github.com/substack/tape) that reports uncaught errors in your tests. It re-adds functionality that was removed from tape in version 3.0.0.

This fork adds a very basic window.onerror listener to catch async errors too.
If you'd like it to be improved, send me a pull request.


## install
```sh
$ npm install tape-catch-onerror
```
**note: tape is not installed alongside tape-catch-onerror.**

tape-catch-onerror works with any and all versions of tape, so it leaves this choice to the user.

## example
```js
var test = require('tape-catch-onerror')

test('cause an exception', function (assert) {
  setTimeout(function() {
    asdf
  }, 100)
  assert.timeoutAfter(500)
})

```

```
TAP version 13
# cause an exception
not ok 1 window.onerror!! file: http://localhost:49720/__zuul/test-bundle.js line: 4176 col: 69 stack : ReferenceError: asdf is not defined at http://localhost:49720/__zuul/test-bundle.js:4176:317
  ---
    operator: fail
  ...
Uncaught ReferenceError: asdf is not defined
1..1
# tests 1
# pass  0
# fail  1
```

## license
[MIT](http://opensource.org/licenses/MIT)
