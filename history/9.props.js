import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
class Person extends Component{

    render(){
        return (
            <p>姓名:{this.props.name}</p>
        )
    }
}
//设置组件的属性类型和是否必需提供
//Failed prop type: The prop `name` is marked as required in `Person`, but its value is `undefined`.
//Invalid prop `name` of type `boolean` supplied to `Person`, expected `string`.
//Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
Person.propTypes = {
    name:PropTypes.string.isRequired
}
//默认属性
Person.defaultProps = {
    name:'无名'
}
render(<Person name="zf"/>,document.querySelector('#root'));