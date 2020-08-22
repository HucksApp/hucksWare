import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring'

import TopNav from './TopNav'
import "../Styles/home.css"
import Button from '@material-ui/core/Button'


export default function HomeDark() {
    const props = useSpring({
        to: [
         {opacity:0.7, color:'#66666B', height: '30px', width:'20%'},
         {opacity: 1, color:'#fff', height: '60px', width:'100%'}
          
        ],
        from: {opacity:0, color:'#000',height: '0%', width: '0%'}
})

return(
    <div className="home_title">
        <TopNav color_type={"#fff"}/>
        <animated.div className="mid_title" style={props}>
            HUCKS
        </animated.div>
   </div>
)



};
