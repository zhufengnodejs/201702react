import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
/**
 * 父组件 加载前
 * 子组件 加载前
 * 子组件 加载后
 * 父组件 加载后
 * 父组件 将要卸载
 * 子组件 将要卸载
 */
class SubCounter extends Component{
    //组件接收到新的属性
    componentWillReceiveProps(){
        console.log('7. componentWillReceiveProps 组件接收到新的属性');
    }
    shouldComponentUpdate(newProps,newState){
        if(newProps.number<=5){
            return true;
        }else{
            return false;
        }
    }
    componentWillMount(){
        console.log('子组件 1. componentWillMount 组件将要被挂载到页面上');
    }
    componentWillUnmount(){
        console.log('子组件  8. componentWillUnmount 组件将要被删除');
    }
    componentDidMount(){
        console.log('子组件 3. componentDidMount 挂载完成后');
    }
    render(){
        return (
        this.props.number<3?<div style={{width:100,height:50,border:'1px solid blue'}}>
                <span>{this.props.number}</span>
            </div>:null
        )
    }
}
/***
 * 组件的生命周期
 * 1. 挂载之前
 */
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    componentWillMount(){
        console.log('1. componentWillMount 组件将要被挂载到页面上');
    }
    handleClick = ()=>{
        this.setState({
            number:this.state.number+1
        });
    }
    //组件是否需要更新 当组件和状态或属性发生改变的时候会走到
    //newProps 新的属性对象  newState 新的状态对象
    shouldComponentUpdate(newProps,newState){
       console.log('4. shouldComponentUpdate 返回一个布尔值，指定组件是否要被更新');
       if(newState.number<=10){// 偶数
          return true;
       }else{
          return false;
       }
    }
    componentWillUpdate(){
        console.log('5. componentWillUpdate 组件将要更新');
    }
    componentDidUpdate(){
        console.log('6. componentDidUpdate 组件更新完成');
    }
    componentWillUnmount(){
        console.log('8. componentWillUnmount 组件将要被删除');
    }
    del = ()=>{
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }
    render(){
        console.log('2.  render 就是挂载的过程');
        return (
            <div style={{width:200,height:100,border:'1px solid red'}}>
                <span>{this.state.number}</span>
                <button onClick={this.handleClick}>+</button>
                <button onClick={this.del}>删除</button>
                <SubCounter number={this.state.number}/>
            </div>
        )
    }
    componentDidMount(){
        console.log('3. componentDidMount 挂载完成后');
    }
}

render(<Counter/>,document.querySelector('#root'))