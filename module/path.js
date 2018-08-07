var fs = require('fs');
var a = require('./foo');
console.log(a.a + 'dsg');

fs.readFile(__dirname + '/path.txt', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
  console.log(__dirname, __filename);
});