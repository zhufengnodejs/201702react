import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Slider from './components/Slider';
const IMAGE_DATA = [
    {src: require('./images/1.jpg'), alt: 'images-1'},
    {src: require('./images/2.jpg'), alt: 'images-2'},
    {src: require('./images/3.jpg'), alt: 'images-3'}
];
render(
    <Slider
        images={IMAGE_DATA} //图片数组
        speed={1.2} //图片切换的速度
        delay={2.1} //轮播的间隔时间
        pause={true} //是否鼠标移动到轮播图上会暂停
        autoplay={true} //是否自动开启轮播
        dots={true} //是否显示点状导航
        arrows={true} //是否显示左右箭头
    />,
    document.getElementById('root')
);