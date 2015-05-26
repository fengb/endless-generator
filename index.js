var supportsGenerators = (function(){
  try {
    eval("(function *(){})")
    return true
  } catch(err) {
    return false
  }
})()

module.exports = require(supportsGenerators ? './endless-generator.es6' : './endless-generator.js')
