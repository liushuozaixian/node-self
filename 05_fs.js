var http = require('http');
var fs = require('fs');

var serivce = http.createServer(function (req, res) {
  var userUrl = req.url;
  //不处理收藏图标
  if (userUrl === '/favicon.ico') {
    return;
  }
  console.log('req.url:' + ' ' + userUrl);
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  //检测这个./test/02_test的文件状态（是文件还是文件夹）
  fs.stat('./test/02_test', function (err, data) {
    console.log(data.isDirectory());
    console.log(data.isFile());
    if (data.isDirectory()) {
      res.end('test文件下的02_test的确是文件夹');
    }
    if (data.isFile()) {
      res.end('test文件下的02_test的确是文件');
    }
    else {
      res.end('无法查询到此文件');
    }
  });


});

serivce.listen(3000, '127.0.0.1');