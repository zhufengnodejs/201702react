import React,{Component} from 'react';
import * as filterTypes from './filter-types';
export default class TodoFooter extends Component{
    render(){
        return (
            <div className="row">
                <div style={{lineHeight:'35px'}} className="col-md-4 text-center">
                    <span>你还有{this.props.activeCount}件待办事项</span>
                </div>
                <div className="col-md-5 text-center">
                    <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_ALL?'active':'')} onClick={()=>this.props.changeFilter(filterTypes.SHOW_ALL)}>全部</button>
                    <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_ACTIVE?'active':'')} style={{marginLeft:5}}  onClick={()=>this.props.changeFilter(filterTypes.SHOW_ACTIVE)}>未完成</button>
                    <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_COMPLETED?'active':'')} style={{marginLeft:5}}  onClick={()=>this.props.changeFilter(filterTypes.SHOW_COMPLETED)}>已完成</button>
                </div>
                <div className="col-md-3 text-center">
                    <button className="btn btn-danger" onClick={this.props.clearAllCompleted}>清除已完成</button>
                </div>
            </div>
        )
    }
}