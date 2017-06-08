import React,{Component} from 'react';
import './Slider.css'
export default class Slider extends Component{
    render(){
        return (
            <div className="slider-wrapper">
                <ul className="sliders">
                    {
                        this.props.images.map((image,index)=>(
                            <li className="slider">
                                <img src={image.src} alt={image.alt}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}