var http = require('http');
var fs = require('fs');

var serivce = http.createServer(function (req, res) {
  var userUrl = req.url;
  if (userUrl === '/favicon.ico') {
    return;
  }
  console.log(userUrl);
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  fs.mkdir('./test/02_test');
  res.end('test文件下的02_test文件夹创建完毕');

});

serivce.listen(3000, '127.0.0.1');