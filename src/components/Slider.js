import React,{Component} from 'react';
import './Slider.css'
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {index:0};
    }
    turn = (n)=>{ // 切换
        let index = this.state.index + n;
        if(index>=this.props.images.length)
            index = 0;
        this.setState({index});
    }
    go = ()=>{
        this.$timer = setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000)
    }
    componentDidMount(){
        if(this.props.autoplay)
            this.go();
    }
    render(){
        let style={
            width:300*this.props.images.length,
            left:this.state.index*-300,
            transitionDuration:this.props.speed+'s'
        }
        let sliderOptions ={};
        if(this.props.pause){
            sliderOptions.onMouseOver =()=>clearInterval(this.$timer);
            sliderOptions.onMouseOut = this.go;
        }
        return (
            <div className="slider-wrapper" {...sliderOptions}>
                <ul className="sliders" style={style}>
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