/*
1. 不能改变输入的参数
2. 相同的输入一定会产出相同的输出
 */
function sum(objA,objB){
  objA.num = 3;
  return objA.num+objB.num+Math.random();
}
console.log(sum({num:1},{num:2}));
console.log(sum({num:1},{num:2}));