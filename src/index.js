import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
/**
 * 1.  react如何跟后台数据交互
 * 2. react如何跟其它框架配合 jquery
 * 1.
 */
class Suggest extends Component {
    constructor(props){
        super(props);
        //index 当前哪个li得到焦点
        this.state = {words:[],index:-1};
    }
    handleChange = (event)=>{
        let wd = event.target.value;
        $.ajax({
            url:'http://www.baidu.com/su',
            type:'GET',
            data:{wd},//?wd=wd
            jsonp:'cb',//指定服务器端用来获取回调方法名的参数名
            dataType:'jsonp',//数据类型
            success:(result)=>{
                this.setState({words:result.s});
            }
        });
    }
    handleKeyDown = (event)=>{

    }
    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input onKeyDown={this.handleKeyDown} onChange={this.handleChange} type="text" className="form-control"/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=><li className={"list-group-item "+(this.state.index==index?'active':'')} key={index}>{word}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
render(<Suggest/>, document.querySelector('#root'));