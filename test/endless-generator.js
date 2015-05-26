var expect = require('./support').expect

var endlessGenerator = require('..')

describe('endless-generator', function(){
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
