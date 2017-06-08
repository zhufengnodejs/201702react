import React,{Component} from 'react';
export default class TodoItem extends Component{
    render(){
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={this.props.todo.completed}/>
                <span style={{marginLeft:10}}>{this.props.todo.content}</span>
                <button className="btn btn-danger btn-xs pull-right">x</button>
            </li>
        )
    }
}