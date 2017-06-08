import React,{Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[{id:1,content:'学习React',completed:false},{id:2,content:'学习Vue',completed:false}]//todo对象数组 {id,content,completed}
        }
    }
    render(){
        return (
            <div className="container" style={{marginTop:10}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">
                                <TodoList todos={this.state.todos}/>
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}