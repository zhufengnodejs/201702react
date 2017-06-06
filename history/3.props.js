import React from 'react';
import ReactDOM, {render} from 'react-dom';
/**
 * 1.一个应用只有一个根的DOM节点 <div id="root">
 * 2.ReactDOM render负责把虚拟DOM转成真实DOM并插入到root中
 * 3.React元素是不可变的，而且React元素和UI是一一对应的
 * 时钟
 **/
function tick() {
    const ele = (
        <h1>
            <h2>今天:</h2>
            <h4>{new Date().toLocaleString()}</h4>
        </h1>
    );
    render(ele, document.querySelector('#root'));
}
setInterval(tick, 1000);