import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
/**
 * 1.  react如何跟后台数据交互
 * 2. react如何跟其它框架配合 jquery
 */
class Suggest extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:10}}>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">

                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
render(<Suggest/>,document.querySelector('#root'));