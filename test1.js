console.log('我是node项目');
var http = require('http');

http.createServer(function (req, res) {
  console.log('我是在请求中！');
  res.end('hello world')
}).listen(3000, 'localhost');