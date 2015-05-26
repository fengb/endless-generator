module.exports = function* endlessGenerator(value){
  while(true){
    yield value
  }
}
