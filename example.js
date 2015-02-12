var test = require('./')

test('cause an exception', function (assert) {
  setTimeout(function() {
    asdf
  }, 100)
  assert.timeoutAfter(500)
})
