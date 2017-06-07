import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//分页组件
class Pagination extends Component{
    render(){
        let lis = [];
        for(let i=1;i<=this.props.totalPages;i++){
            lis.push(<li key={i} className={i==this.props.pageNum?"active":""}><a href="#">{i}</a></li>);
        }
        return (
            <nav>
                <ul className="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        lis
                    }
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
render(<Pagination pageNum={2} totalPages={5}/>,document.querySelector('#root'));