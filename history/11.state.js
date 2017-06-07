import React,{Component} from 'react';
import {render} from 'react-dom';
class Person extends Component{
    constructor(props){
        super(props);//调用父类的构造函数
        //初始化一个默认状态对象 happy:true
        this.state = {happy:true};
    }
    handleClick = ()=>{
        //必须要调用setState方法来修改状态对象，
        this.setState({
            happy:!this.state.happy
        });
    }
    render(){
        return (
            <div>
                <p>姓名:{this.props.name}</p>
                <p>{this.state.happy?'开心':'不开心'}</p>
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
}
render(<Person name="zfpx"/>,document.querySelector('#root'));