import React,{Component} from 'react';
import {render} from 'react-dom';
//如何在React中得到并操作DOM元素
class Calculator extends Component{
  constructor(props){
      super(props);
  }
  change = ()=>{
      console.log(this.refs);
    //this.refs是一个对象，属性就是虚拟DOM的ref的值 ，值是此虚拟DOM渲染完成之后的真实DOM对象
    let a = this.a.value;
    let b = this.refs.b.value;
    this.refs.result.innerHTML = parseInt(a)+parseInt(b);
  }
  render(){
      //ref可以等于一个函数，这个函数会在此虚拟DOM转为真实DOM插入到页面之后执行，参数就是此真实DOM对象
      return (
          <div>
              <input ref={ref=>this.a=ref} type="text" defaultValue={0} onChange={this.change}/>
              +
              <input ref="b" type="text" defaultValue={0} onChange={this.change}/>
              =
              <span ref="result">{0}</span>
          </div>
      )
  }
}
render(<Calculator/>,document.querySelector('#root'));