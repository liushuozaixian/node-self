//post请求的提交与处理！

var http = require('http');
var querystring = require('querystring');
var service = http.createServer(function (req, res) {
  var reqMethod = req.method;
  console.log(reqMethod);
  if (req.method.toLowerCase() === 'post' && req.url.substr(0, 4) === '/stu') {
    var reqData = '';
    req.on('data', function (chunk) {
      reqData += chunk;
    });
    req.on('end', function () {
      res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
      console.log(querystring.parse(reqData));
      res.end('post请求读取完毕！');
    });


  }
});

service.listen(3000, '127.0.0.1');
