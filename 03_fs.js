var http = require('http');
var fs = require('fs');

var serivce = http.createServer(function (req, res) {
  var userUrl = req.url;
  if (userUrl === '/favicon.ico') {
    return;
  }
  console.log(userUrl);
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  fs.readFile('./test/01_test.html', function (err, data) {
    if (err) {
      throw err;
    }
    res.end(data);
  });

});

serivce.listen(3000, '127.0.0.1');