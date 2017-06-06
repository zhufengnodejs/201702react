import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
class Panel extends Component{
  render(){
      return (
          <div>

          </div>
      )
  }
}
class PanelHead extends Component{

}
class PanelBody extends Component{

}
class PanelFooter extends Component{

}
render(<Panel head="头" body="体" footer=" 尾"/>,document.querySelector('#root'));