/*class Person{
  //当new这个类的实例的时候执行的函数
  constructor(name){
    this.name = name;
  }
  getName(){
  }
}
let p1 = new Person('zfpx1');
console.log(p1);*/

function Person(name){
    this.name = name;
}
console.log(this);
//如果希望函数中的this指向调用此函数的对象，不应该用箭头函数
//如果希望函数中的this是固定为定义的时候外层的this,这时应该用箭头函数
Person.prototype.getName= ()=>{
  console.log(this.name);
}
let p2 = new Person('zfpx1');
p2.getName();