var expect = require('./support').expect


function examplesFor(name, path, options){
  options = options || {}

  try {
    var endlessGenerator = require(path)
  } catch(err){
    if(err instanceof SyntaxError && options.passOnSyntaxError){
      return
    } else {
      throw err
    }
  }

  describe(name, function(){
    it('yields the passed-in value continuously', function(){
      var gen = endlessGenerator('foo')
      for(var i = 0; i < 1000; i++){
        expect(gen).to.yield('foo')
      }
    })

    it('yields original object', function(){
      var obj = [{}]
      var gen = endlessGenerator(obj)
      expect(gen).to.yield(obj)
      expect(gen).to.yield(obj)
      expect(gen).to.yield(obj)
      expect(gen).to.yield(obj)
    })
  })
}

describe('endless-generator', function(){
  examplesFor('index', '../index.js')
  examplesFor('es5', '../endless-generator.js')
  examplesFor('es6', '../endless-generator.es6', { passOnSyntaxError: true })
})
