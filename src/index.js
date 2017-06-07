import React,{Component} from 'react';
import {render} from 'react-dom';
//表单元素的双向数据绑定
//受控组件和非受控组件
//受控组件 表单元素值受组件的状态控制
class Input extends Component{
    constructor(props){
        super(props);
        this.state = {val:'1'};
    }
    //事件处理器 event参数
    handleChange = (event)=>{
        this.setState({
            val:event.target.value
        });
    }
    render(){
        return (
            <div>
                <input onChange={this.handleChange} type="text" value={this.state.val}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
}
render(<Input/>,document.querySelector('#root'));