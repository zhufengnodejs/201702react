import React,{Component} from 'react';
export default class TodoFooter extends Component{
    render(){
        return (
            <div className="row">
                <div style={{lineHeight:'35px'}} className="col-md-4 text-center">
                    <span>你还有{this.props.activeCount}件待办事项</span>
                </div>
                <div className="col-md-5 text-center">
                    <button className="btn btn-default ">全部</button>
                    <button className="btn btn-default " style={{marginLeft:5}}>未完成</button>
                    <button className="btn btn-default" style={{marginLeft:5}}>已完成</button>
                </div>
                <div className="col-md-3 text-center">
                    <button className="btn btn-danger">清除已完成</button>
                </div>
            </div>
        )
    }
}