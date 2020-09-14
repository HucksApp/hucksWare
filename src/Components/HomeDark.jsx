import React,{ useEffect  } from 'react';


import "../Styles/home.css"
import ArrowForward from '@material-ui/icons/ArrowForward';



import {  rotateInDownLeft,rotateInUpRight,zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';





const styles = {
    rotateInDownLeft: {
    animation: 'x 2s',
    transitionDelay:'x 3s',
    animationName: Radium.keyframes(rotateInDownLeft, 'rotateInDownLeft')
  },rotateInUpRight: {
    animation: 'x 2s',
    transitionDelay:'3s',
    animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')
  },zoomIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}











export default function HomeDark(props) {



    const  handleChange = () => {
        props.update_home(false)
    }
    
/*
    useEffect(()=>{

        window.addEventListener("scroll",handleChange)
        return window.removeEventListener("scroll", handleChange)
   
   
   //window.onscroll = ()=>{ handleScroll()}
   
   },[])
    
*/
return(
    <StyleRoot>
    <div style={styles.zoomIn} className="home_title">
       
        <div className="mid_title" >
        <StyleRoot>
            <p style={styles.rotateInDownLeft}>Hello, I'm <span className="my_name"> Aremu Mohammad Abiodun</span></p>  
            </StyleRoot> 
            <StyleRoot>         
            <p style={styles.rotateInUpRight}> I'm a Senior Software Engineer</p>
            </StyleRoot> 
            <button id="home_button"  onClick={handleChange}>
                <p>
                <span className='arrow_class1'>Explore</span><span className='arrow_class'><ArrowForward className= "home_arrow"/></span>
                </p>
            </button>

        </div>
   </div>
   </StyleRoot>
)



};




/*

const props = useSpring({
        to: [
            {transform:'scale(0.7,0.7)',opacity:0.6, transition: 'all 0.4s'},
            {transform:'scale(1,1)',opacity:1, transition: 'all 0.4s'}
          
        ],
        from: {transform:'scale(0.4,0.4)',opacity:0, transition: 'all 0.4s'}
})

*/