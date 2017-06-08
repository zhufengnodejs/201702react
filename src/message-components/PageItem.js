import React,{Component} from 'react';
// UI组件 木偶组件 傻瓜组件
export default class PageItem extends Component{
    render(){
        let {i,changePage,current} = this.props;
        return (
            <li onClick={()=>changePage(i)} key={i} className={i==current?"active":""}><a href="#">{this.props.children}</a></li>
        )
    }
}