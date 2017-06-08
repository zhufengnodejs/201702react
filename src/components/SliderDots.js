import React,{Component} from 'react';
export default class SliderDots extends Component{
    render(){
        return (
            <div className="slider-dots">
                {
                    this.props.images.map((image,index)=>(
                        <span onClick={()=>this.props.turn(index-this.props.index)} className={"slider-dot "+(this.props.index==index?'active':'')}></span>
                    ))
                }
            </div>
        )
    }
}