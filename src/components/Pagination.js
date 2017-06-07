import React,{Component} from 'react';
import PageItem from './PageItem';
//分页组件
export default class Pagination extends Component{
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