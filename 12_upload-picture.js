//图片上传！！！！
var http = require('http');
var querystring = require('querystring');
var util = require('util');
var fs = require('fs');
//这个是第三方的模块
var formidable = require('formidable');
var path = require('path');


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
      fs.rename('./' + files.tupian.path, './pictures/' + parseInt(10000 + 89999 * Math.random()) + path.extname(files.tupian.name));
      console.log(files.tupian.name);
      // res.writeHead(200, {'content-type': 'text/plain'});
      // console.log(util.inspect({fields: fields, files: files}));
      // fs.rename(files.)
      res.end('成功');
    });
  } else if (req.url === '/') {
    fs.readFile('./12_upload-picture.html', function (err, data) {
      if (err) {
        throw Error('读取文件失败！');
      }
      res.end(data);
    });
  } else {

  }
});

service.listen(3000, '10.136.194.182');
