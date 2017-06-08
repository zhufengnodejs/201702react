import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
        let style={
            width:300*this.props.images.length,
            left:this.props.index*-300,
            transitionDuration:this.props.speed+'s'
        }
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider">
                            <img src={image.src} alt={image.alt}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}