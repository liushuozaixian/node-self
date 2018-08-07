//图片上传！！！！
var http = require('http');
var querystring = require('querystring');
var util = require('util');
var formidable = require('formidable');

var service = http.createServer(function (req, res) {
  var reqMethod = req.method;
  if (req.method.toLowerCase() === 'post' && req.url.substr(0, 4) === '/stu') {
    var form = new formidable.IncomingForm();
    //这个指定的文件夹要自己先写出来！！！
    //并且必须要有./不可以直接写/直接写/代表的是根目录！
    form.uploadDir = "./pictures";
    form.parse(req, function (err, fields, files) {
      if (err) {
        throw err;
      }
      console.log(files);
      // res.writeHead(200, {'content-type': 'text/plain'});
      console.log(util.inspect({fields: fields, files: files}));
      res.end('成功');
    });
  }
});

service.listen(3000, '127.0.0.1');
