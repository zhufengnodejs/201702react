import React,{Component} from 'react';
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state = {messages:[]};
    }
    handleSubmit = (event)=>{
        event.preventDefault();//阻止表单的默认事件
        let val = this.refs.content.value;
        this.state.messages.push(val)
        this.setState({
            messages:this.state.messages
        });
        this.refs.content.value = '';
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                              <h3 className="text-center">欢迎来到珠峰留言板</h3>
                            </div>
                            <div className="panel-body">
                              <ul className="list-group">
                                  {
                                      this.state.messages.map((item,index)=><li className="list-group-item">{item}</li>)
                                  }
                              </ul>
                            </div>
                            <div className="panel-footer">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="content">内容</label>
                                        <input ref="content" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                       <button type="submit" className="btn btn-primary">提交</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}