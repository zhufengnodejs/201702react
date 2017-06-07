import React,{Component} from 'react';
import {render} from 'react-dom';
class Calculator extends Component{
  constructor(props){
      super(props);
      this.state = {a:0,b:0};
  }
  change = (event,key)=>{
    this.setState({
        [key]:parseInt(event.target.value)
    });
  }
  render(){
      return (
          <div>
              <input type="text" value={this.state.a} onChange={(event)=>this.change(event,'a')}/>
              +
              <input type="text" value={this.state.b} onChange={(event)=>this.change(event,'b')}/>
              =
              <span>{this.state.a+this.state.b}</span>
          </div>
      )
  }
}
render(<Calculator/>,document.querySelector('#root'));