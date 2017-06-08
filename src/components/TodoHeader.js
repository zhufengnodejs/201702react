import React,{Component} from 'react';
export default class TodoHeader extends Component{
    render(){
        return (
            <input type="text" className="form-control" placeholder="请输入你的梦想"/>
        )
    }
}