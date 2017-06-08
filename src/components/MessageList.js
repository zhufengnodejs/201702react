import React,{Component} from 'react';
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((item,index)=><li className="list-group-item">{item.username}:{item.content} <span className="pull-right">{item.createAt.toLocaleString()}</span></li>)
                }
            </ul>
        )
    }
}