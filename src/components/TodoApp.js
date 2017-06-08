import React,{Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]//todo对象数组 {id,content,completed}
        }
    }
    //增加TODO
    addTodo = (todo)=>{ //参数为todo对象
        todo.id = Date.now()+''+Math.random();//添加ID
        todo.completed = false;//添加完成状态
        this.state.todos.push(todo);//向老数组里添加一个新的元素
        this.setState({todos:this.state.todos});//设置状态
    }
    render(){
        return (
            <div className="container" style={{marginTop:10}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo}/>
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