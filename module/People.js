//module模块的暴露方式二（当需要暴露的是一个类的时候需要此种方式来暴露）
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

People.prototype.sayname = function () {
  console.log(this.name);
  return '她已经说出了自己的名字！' + this.name;
};
module.exports = People;

