import React,{Component} from 'react';
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state = {messages:[]};
    }
    //增加一条留言
    addMessage = (msg)=>{
        //向老的留言数组中增加一个对象
        this.state.messages.push(msg);
        //修改状态对象并重新渲染视图
        this.setState({
            messages:this.state.messages
        });
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <MessageHeader/>
                            </div>
                            <div className="panel-body">
                                <MessageList messages={this.state.messages}/>
                            </div>
                            <div className="panel-footer">
                                <MessageForm addMessage={this.addMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * 1. 实现匿名留言
 * 2. 增加用户名
 * 3. 增加发表时间
 * 4. 删除功能
 * 5. 数据持久化
 */