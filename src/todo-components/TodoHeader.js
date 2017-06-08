import React,{Component} from 'react';
export default class TodoHeader extends Component{
    handleKeyDown=(event)=>{
       let code = event.keyCode;//先获得按钮的编码
       if(code == 13){
           let content = event.target.value;
           if(content){
                this.props.addTodo({content});
                event.target.value = '';
           }
       }
    }
    render(){
        return (
            <input type="text" className="form-control" placeholder="请输入你的梦想" onKeyDown={this.handleKeyDown}/>
        )
    }
}