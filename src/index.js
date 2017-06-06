import React from 'react';
import ReactDOM from 'react-dom';
let id = 'id1';
//React元素 -虚拟DOM元素
//是以<DOM标签开头的
//虚拟DOM元素属性不能随便写
//要转换驼峰命名法的话 class class
let style = {backgroundColor:'green'};
let msg = `
<script>while(true)alert('1');</script>
`

let ele = (
    <h1 className="red" style={style}>
        hello
    </h1>
)
console.log(ele);
// {type:'h1',props:{children:'hello',className:'red',style:{backgroundColor:'green'}}}
ReactDOM.render(
    ele,
    document.querySelector('#root')
);