var tape = require('tape')

exports = module.exports = tape

// Maintain tape@1 compatibility
exports.Test.prototype._end = (
  exports.Test.prototype._end ||
  exports.Test.prototype.end
)

var currentTest

exports.Test.prototype.run = function () {
  if (!this._cb || this._skip) {
    return this._end()
  }
  this.emit('prerun')
  try {
    this._cb(this)
  }
  catch (err) {
    this.error(err)
    this._end()
    return
  }
  this.emit('run')

  currentTest = this
}

if (typeof window !== 'undefined') {
  window.onerror = function(message, file, line, column, error) {
    if (currentTest) {
      currentTest.fail('window.onerror!! file: ' + file + ' line: ' + line +
        ' col: ' + column + (error ? ' stack : ' + error.stack : ''))
      currentTest.end()
    }
  }
}
