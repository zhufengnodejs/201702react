import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
let names = ['大毛','大毛','三毛'];
{/*
<div>
    <span>大毛</span> <span>二毛</span> <span>三毛</span>
</div>*/}
//我需要做一个字符串数组或对象数组映射成一个虚拟DOM元素数组
//Each child in an array or iterator should have a unique "key" prop
render(<div>
    {
        names.map((name,index)=><span key={index}>{name}</span>)
    }
</div>,document.querySelector('#root'));
