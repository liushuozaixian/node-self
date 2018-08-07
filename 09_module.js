//module的引入方式一
var foo = require('./module/foo');
var a = foo.a;
var b = foo.b;
console.log(b());

//module的引入方式二
var People = require('./module/People');
var person1 = new People('小红', 1989, '女');

console.log(person1.name);
console.log(person1.sayname());
