import React,{Component} from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.todos.map((todo,index)=><TodoItem key={index} todo={todo}/>)
                }
            </ul>
        )
    }
}