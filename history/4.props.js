import React from 'react';
import ReactDOM, {render} from 'react-dom';
/**
 组件 可以把一个页面拆成多个独立组件，分别考虑
 函数式组件 类式组件
 **/
//这是一个独立的合法的组件
//所以说渲染组件其实就是渲染组件函数的执行结果
//props是一个对象 props={name:'zfpx'}
//react元素不能传自定义属性，但是组件可以
//只能返回一个且必须返回一个顶级React元素
/*function Welcome(props){
    return <h1>hello,{props.name} {props.age}</h1>
}*/
/**
 * 1. 可以通过类来声明React组件
 * 2. 需要定义render方法，render方法能且只能返回一个顶级React元素
 * 3. 1. 先实例化 let w = new Welcome(); w.render()
 */
class welcome extends React.Component{
    //this.props= props;
    render(){
        return <h1>hello,{this.props.name} {this.props.age}</h1>
    }
}
/**
 * React元素 如果首字母是小写开头，那就是React元素
 * React组件 首字母是大写 那就是组件
 */
render(<Welcome name="zfpx" age="9"/>,document.querySelector('#root'));