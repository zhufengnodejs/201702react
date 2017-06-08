import React,{Component} from 'react';
import './Slider.css'
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {index:0};
    }
    turn = (n)=>{ // 切换
        let index = this.state.index + n;
        this.setState({index});
    }
    go = ()=>{
        this.$timer = setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000)
    }
    componentDidMount(){
        this.go();
    }
    render(){
        let style={
            width:200*this.props.images.length,
            left:this.state.index*-200,
            transitionDuration:'1s'
        }
        return (
            <div className="slider-wrapper">
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