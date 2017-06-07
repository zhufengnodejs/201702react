import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {number:0,name:'张三'};
    }

    /**
     * 事件监听函数里的this默认指向null
     * bind
     * 箭头函数
     */
    handleClick = ()=>{
        // setState是异步的，不能调用之后立刻取值
        //必须在回调函数中取更新的值
        this.setState({
            number:this.state.number+1
        },()=>{
            alert(this.state.number);
        });
    }
    render(){
        return (
            <div>
                <p>{this.state.name}:{this.state.number}</p>
                <button onClick={this.handleClick.bind(this)}>+</button>
            </div>
        )
    }
}
render(<Counter/>,document.querySelector('#root'));