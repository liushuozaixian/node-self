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
  var mime = MIME(extname);
  fs.readFile('./static' + pathname, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
      fs.readFile('./static/error.html', function (err, data) {
        res.end(data);
      });
      return;
    }
    console.log('我到了正确返回的位置了');
    res.writeHead(200, {'Content-type': mime + '; charset=utf-8'});
    res.end(data);
  });
});

function MIME(extname) {
  switch (extname) {
    case  '.jpg':
      return 'image/jpg';
      break;
    case  '.html':
      return 'text/html';
      break;
  }
}
service.listen(3000, '127.0.0.1');