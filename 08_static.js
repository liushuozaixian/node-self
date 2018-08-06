var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var service = http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  //此时的pathname指的是在地址栏中端口号后面的企且第一个?或是#前面的那部分区域的东西！
  var pathname = url.parse(req.url).pathname;
  console.log('pathname:', pathname);
  if (pathname === '/') {
    pathname = '/index.html';
  }

  var extname = path.extname(pathname);
  console.log(extname);
  fs.readFile('./static' + pathname, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
      fs.readFile('./static/error.html', function (err, data) {
        res.end(data);
      });
      return;
    }
    MIME(extname, function (extname) {
      res.writeHead(200, {'Content-type': extname + '; charset=utf-8'});
      res.end(data);
    });
    console.log('我到了正确返回的位置了');

  });
});

function MIME(extname, callback) {
  fs.readFile('./static/mine.json', function (err, data) {
    if (err) {
      throw Error('该文件夹不存在！');
    }
    var shuju = JSON.parse(data);
    callback(shuju[extname]);
  });
}
service.listen(3000, '127.0.0.1');