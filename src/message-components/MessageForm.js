import React,{Component} from 'react';
export default class MessageForm extends Component{
    handleSubmit = (event)=>{
        event.preventDefault();//阻止表单的默认事件
        let username = this.refs.username.value;
        let content = this.refs.content.value;
        let msg = {
            id:Date.now()+''+Math.random(),
            username,//用户名
            content,//内容
            createAt:new Date()//发表的时间
        }
        this.props.addMessage(msg);
        this.refs.content.value = '';
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="content">姓名</label>
                    <input ref="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <input ref="content" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">提交</button>
                </div>
            </form>
        )
    }
}