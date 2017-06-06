import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
class Panel extends Component{
  //this.props = {head=:"头",body:"体",footer:"尾"}
  render(){
      return (
          <div className="panel panel-default">
            <PanelHead content={this.props.head}/>
            <PanelBody content={this.props.body}/>
            <PanelFooter content={this.props.footer}/>
          </div>
      )
  }
}
class PanelHead extends Component{
    render(){
        return <div className="panel-heading">
            {this.props.content}
        </div>
    }
}

class PanelBody extends Component{
    render(){
        return <div className="panel-body">{this.props.content}</div>
    }
}

class PanelFooter extends Component{
    render(){
        return <div className="panel-footer">{this.props.content}</div>
    }
}
render(<Panel head="头" body="体" footer=" 尾"/>,document.querySelector('#root'));