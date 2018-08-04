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


  fs.readdir('./test2', function (err, files) {
    console.log(files);
    var dirNames = [];
    for (var i = 0; i < files.length; i++) {
      var dirName = files[i];
      fs.stat('./test2/' + dirName, function (err, stats) {
        if (stats.isDirectory()) {
          dirNames.push(dirName);
        }
        console.log(dirNames);
      });
    }
    res.end('读取完毕！');
  });

});

serivce.listen(3000, '127.0.0.1');