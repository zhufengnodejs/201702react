import React,{Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]//todo对象数组 {id,content,completed}
        }
    }
    toggle = (id)=>{
        let todos = this.state.todos.map(item=>{
            if(item.id === id)
                item.completed = !item.completed;
            return item;
        });
        this.setState({todos});
    }
    //增加TODO
    addTodo = (todo)=>{ //参数为todo对象
        todo.id = Date.now()+''+Math.random();//添加ID
        todo.completed = false;//添加完成状态
        this.state.todos.push(todo);//向老数组里添加一个新的元素
        this.setState({todos:this.state.todos});//设置状态
    }
    delTodo = (deleteId)=>{
        let todos = this.state.todos.filter((todo)=>todo.id != deleteId);
        this.setState({todos});
    }
    render(){
        //未完成的事项数量
        let activeCount = this.state.todos.filter(item=>!item.completed).length;

        return (
            <div className="container" style={{marginTop:10}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo}/>
                            </div>
                            <div className="panel-body">
                                <TodoList activeCount={activeCount} todos={this.state.todos} delTodo={this.delTodo} toggle={this.toggle}/>
                            </div>
                            <div className="panel-footer">
        <TodoFooter activeCount={activeCount}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}