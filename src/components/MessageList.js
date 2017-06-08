import React,{Component} from 'react';
import MessageItem from './MessageItem';
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((item,index)=><MessageItem delMessage={this.props.delMessage} key={index} item={item}/>)
                }
            </ul>
        )
    }
}