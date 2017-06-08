import React,{Component} from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.todos.length>0? <li className="list-group-item">
                        <input type="checkbox" checked={this.props.activeCount==0} onChange={(event)=>this.props.toggleAll(event.target.checked)}/><span style={{marginLeft:5}}>{this.props.activeCount==0?'全部取消':'全部选中'}</span>
                    </li>:null
                }

                {
                    this.props.todos.map((todo,index)=><TodoItem cancelEdit={this.props.cancelEdit} updateTodo={this.props.updateTodo} changeEditing={this.props.changeEditing} editing={this.props.editing} delTodo={this.props.delTodo} key={index} todo={todo} toggle={this.props.toggle}/>)
                }
            </ul>
        )
    }
}