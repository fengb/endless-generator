# endless-generator

Create a generator that spits out the same value endlessly.

*Note: endless means endless (i.e. infinite). Do not iterate over without an
explicit break or an infinite loop will occur.*

```javascript

var endlessGenerator = require('endless-generator')
var foo = endlessGenerator('foo')

for(var i = 0; i < 1000; i++){
  console.log(foo.next()) // never ending!
}

```
