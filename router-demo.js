var http = require('http');

var service = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var userUrl = req.url;
  console.log(userUrl);
  console.log(userUrl.substr(5));
  //http://127.0.0.1:3000/stu/123才是正确的！！！
  if (userUrl.substr(0, 5) === '/stu/') {
    if (/^\d{3}$/.test(userUrl.substr(5))) {
      console.log(userUrl.substr(5));
      res.end('正确的号码');
    } else {
      console.log(userUrl.substr(5), 'dsg');
      res.end('不正确的号码');
    }
    console.log('我擦');
  } else {
    res.end('stu不正确！');
  }
  console.log(userUrl);
  res.end('哈哈');
});

service.listen(3000, '127.0.0.1');
