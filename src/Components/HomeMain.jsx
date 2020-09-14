import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ScheduleIcon from '@material-ui/icons/Schedule';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import DevicesIcon from '@material-ui/icons/Devices';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';


import AboutHome from './AboutHome'
import Skills from './Skills';

import {  flipInY } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TopNav from './TopNav'


const styles = {
    flipInY: {
    animation: 'x 2s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  }}






const HomeMain = (props) => {



    return (
        <StyleRoot>
        <div className="main_home" style={styles.flipInY}>
            <TopNav update_home={props.update_home}/>
            <div className='about_underline'> 
            <h1 >ABOUT</h1>
            <p ></p>
            </div>
            <div className='contain'>
                <div>
            <Card raised={true}>
            <CardContent> 
                <ScheduleIcon style={{fontSize: 150,color:'#616161'}}/>
            </CardContent>

            </Card>
            <h3>Fast And Efficient</h3>
             <p></p>
        </div>

        <div>
        <Card raised={true}>
        <CardContent> 
                <SquareFootIcon style={{fontSize: 150,color:'#616161'}}/>
            </CardContent>
        </Card>
        <h3>Tailored For You </h3>
        <p></p>
        </div>

        <div>
        <Card raised={true}>
        <CardContent> 
                <DevicesIcon style={{fontSize: 150,color:'#616161'}}/>
            </CardContent>
        </Card>
        <h3> Responsive Layouts</h3>
        <p></p>
        </div>

        <div>
        <Card raised={true}>
        <CardContent> 
                <DynamicFeedIcon style={{fontSize: 150,color:'#616161'}}/>
            </CardContent>
        </Card>
        <h3>Dynamic</h3>
        <p></p>
        </div>
        </div>
        <AboutHome/>
        <Skills/>

        </div>
        
        </StyleRoot>
    );
}

export default HomeMain;
