import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// UI组件 木偶组件 傻瓜组件
class PageItem extends Component{
    render(){
        let {i,changePage,current} = this.props;
        return (
            <li onClick={()=>changePage(i)} key={i} className={i==current?"active":""}><a href="#">{this.props.children}</a></li>
        )
    }
}
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
            lis.push(<PageItem key={0} i={this.state.current-1} changePage={this.changePage} current={this.state.current}><span aria-hidden="true">&laquo;</span></PageItem>);
        }
        for(let i=1;i<=this.props.totalPages;i++){
            lis.push(<PageItem key={i} i={i} changePage={this.changePage} current={this.state.current}>{i}</PageItem>);
        }
        if(this.state.current<this.props.totalPages){
            lis.push(<PageItem key={this.props.totalPages+1} i={this.state.current+1} changePage={this.changePage} current={this.state.current}><span aria-hidden="true">&raquo;</span></PageItem>);
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