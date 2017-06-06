import React from 'react';
import ReactDOM from 'react-dom';

let user = {firstName:'张',lastName:'三'};
//JSX= Javascript+XML一种混合写法
function format(user){
  if(user){
      return <h1>hello {user.firstName+user.lastName}</h1>
  }else{
      return <h1>hello 陌生人</h1>
  }
}
//它是一个React元素,是用来描述DOM结构，或者UI结构
let ele = format(user);
//render是把一个react元素渲染到root容器内部
ReactDOM.render(
    ele,
    document.querySelector('#root')
);

//elements and components.
//React元素 React组件
