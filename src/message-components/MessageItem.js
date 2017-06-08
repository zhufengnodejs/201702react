import React,{Component} from 'react';
export default class MessageItem extends Component{
    render(){
        return (
            <li className="list-group-item">{this.props.item.username}:{this.props.item.content} <button onClick={()=>this.props.delMessage(this.props.item.id)} className="btn btn-danger btn-xs">x</button> <span className="pull-right">{this.props.item.createAt.toLocaleString()}</span></li>
        )
    }
}