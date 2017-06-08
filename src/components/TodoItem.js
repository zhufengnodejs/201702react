import React,{Component} from 'react';
export default class TodoItem extends Component{
    render(){
        let {todo} = this.props;
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                {
                    this.props.editing === todo.id?<input style={{marginLeft:10,width:'80%',display:'inline-block'}} className="form-control" defaultValue={todo.content}/>:<span  style={{width:'80%',display:'inline-block',marginLeft:10,textDecoration:todo.completed?'line-through':'none'}} onDoubleClick={()=>this.props.changeEditing(todo.id)}>{todo.content}</span>
                }

                <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.delTodo(todo.id)}>x</button>
            </li>
        )
    }
}