import React,{Component} from 'react';
export default class MessageBox extends Component{
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

                              </ul>
                            </div>
                            <div className="panel-footer">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="content">内容</label>
                                        <input type="text" className="form-control"/>
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