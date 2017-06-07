import React,{Component} from 'react';
import {render} from 'react-dom';
class Messages extends Component{
  render(){
      /*console.log(this.props.children);
      // typeof instanceof map toString
      let children = this.props.children;
      if(!(children instanceof Array)){
          children = [children];
      }*/
      //React.Children.map是React提供的工具方法
      return (
          <ul>
              {
                  React.Children.map(this.props.children,(item,index)=><li key={index}>{item}</li>)
              }
          </ul>
      )
  }
}
render(<Messages>
    <span>大毛</span>
</Messages>,document.querySelector('#root'));
{/*
<ul>
    <li><span>大毛</span></li>
    <li><span>二毛</span></li>
    <li><span>三毛</span></li>
</ul>*/}
