module.exports = function endlessGenerator(value){
  return {
    next: function(){
      return { done: false, value: value }
    }
  }
}
