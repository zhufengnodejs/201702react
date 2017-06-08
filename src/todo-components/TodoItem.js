import React,{Component} from 'react';
export default class TodoItem extends Component{
    handleKeyDown = (event,id)=>{
        let code = event.keyCode;
        if(code === 13){
            let content = event.target.value;
            this.props.updateTodo(id,content);
        }
        if(code == 27){
            this.props.cancelEdit();
        }
    }
    render(){
        let {todo} = this.props;
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                {
                    this.props.editing === todo.id?<input onKeyDown={(event)=>this.handleKeyDown(event,todo.id)} style={{marginLeft:10,width:'80%',display:'inline-block'}} className="form-control" defaultValue={todo.content}/>:<span  style={{width:'80%',display:'inline-block',marginLeft:10,textDecoration:todo.completed?'line-through':'none'}} onDoubleClick={()=>this.props.changeEditing(todo.id)}>{todo.content}</span>
                }
                <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.delTodo(todo.id)}>x</button>
            </li>
        )
    }
}