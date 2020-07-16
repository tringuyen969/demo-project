var Dog = require('./Dog')
var Cat = require('./Cat')

var dog = new Dog('Bun')
dog.sayHi();

var tom = new Cat('Tom', 2)

dog.eat(tom)
console.log(dog)