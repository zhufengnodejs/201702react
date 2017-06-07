import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//分页组件
class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {current:this.props.pageNum};
    }
    changePage =(current)=>{
        this.setState({current});
    }
    render(){
        let lis = [];
        if(this.state.current>1){
            lis.push(<li key={0} onClick={()=>this.changePage(this.state.current-1)}>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>);
        }
        for(let i=1;i<=this.props.totalPages;i++){
            lis.push(<li onClick={()=>this.changePage(i)} key={i} className={i==this.state.current?"active":""}><a href="#">{i}</a></li>);
        }
        if(this.state.current<this.props.totalPages){
            lis.push(<li onClick={()=>this.changePage(this.state.current+1)} key={this.props.totalPages+1}>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>);
        }
        return (
            <nav>
                <ul className="pagination">
                    {
                        lis
                    }
                </ul>
            </nav>
        )
    }
}
render(<Pagination pageNum={1} totalPages={5}/>,document.querySelector('#root'));