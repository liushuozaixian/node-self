var http = require('http');
var url = require('url');

var service = http.createServer(function (req, res) {
  var query1 = url.parse(req.url, true).query;
  console.log(query1);
  // res.setEncoding('utf8');
  //当不写charset=utf-8的时候会出现乱码的问题！！！！
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  url1 = query1.name + query1.age + query1.sex
  console.log(url1);
  res.end('服务器收到了请求' + url1)
});

service.listen(3000, '127.0.0.1');