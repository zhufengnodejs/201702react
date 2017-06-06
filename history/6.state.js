import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
/**
 * 1. 属性具有不变性
 * 属性是由外部传入的，而且不会改变
 * 组件的生命周期
 *
 * 1. 先在构造函数中定义一个初始的状态对象
 **/
class Clock extends Component{
    //当一个类实例化的时候会先调用构造函数
    constructor(){
        super();//子类的构造函数必须先调用父类的构造函数
        //初始化一个状态对象，默认值是当前时间
        this.state = {time:new Date().toLocaleString()};
    }

    //当React把虚拟DOM转换成真实DOM并且插入目标容器内部之后会执行此方法
    componentDidMount(){
        //必须用箭头函数，保证函数里的this和外面的this是一样的，都指向当前组件的实例
        this.$timer = setInterval(()=>{
            //setState是React提供的方法，用来修改状态对象，使用setState更改状态之后会自动重新调用render方法渲染页面
            this.setState({time:new Date().toLocaleString()});
            this.setState({time:new Date().toLocaleString()});
            this.setState({time:new Date().toLocaleString()});
            /*this.state.time = new Date().toLocaleString()*/
        },1000)
    }
    render(){
        return (
            <h1>{this.state.time}</h1>
        )
    }
}
render(<Clock/>,document.querySelector('#root'));