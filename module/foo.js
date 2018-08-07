//module的暴露方式一
var a = 1;
var b = function () {
  console.log(a);
  return '哈哈';
};
exports.a = a;
exports.b = b;
