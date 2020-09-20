import React, { createRef, forwardRef } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ScheduleIcon from '@material-ui/icons/Schedule';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import DevicesIcon from '@material-ui/icons/Devices';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';


import SmallScreeAbout from './SmallScreeAbout'
import Contact from './Contact'
import Experience from './Experience'
import AboutHome from './AboutHome'
import Skills from './Skills';

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TopNav from './TopNav'


const styles = {
    fadeInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}






const HomeMain = (props) => {

    const aboutRef = createRef()
    const skillsRef = createRef()
    const experienceRef = createRef()
    const contactRef = createRef()
    const scrollTop = createRef()


    const ForwardTopNav = forwardRef((props, ref) => {
        return (
            <TopNav
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                experienceRef={experienceRef}
                contactRef={contactRef}
                {...props}

            />
        )
    })


    const ForwardedContact = forwardRef((props, ref) => {
        return (

            <Contact scrollTop={scrollTop} {...props} />
        )
    })




    return (
        <StyleRoot>
            <div ref={scrollTop} className="main_home" style={styles.fadeInUp}>
                <ForwardTopNav update_home={props.update_home}

                />
                <div className='about_underline'>
                    <h1 >ABOUT</h1>
                    <p ></p>
                </div>
                <div className='contain'>
                    <div>
                        <Card raised={true}>
                            <CardContent>
                                <ScheduleIcon style={{ fontSize: 150, color: '#616161' }} />
                            </CardContent>

                        </Card>
                        <h3>Fast And Efficient</h3>
                        <p></p>
                    </div>

                    <div>
                        <Card raised={true}>
                            <CardContent>
                                <SquareFootIcon style={{ fontSize: 150, color: '#616161' }} />
                            </CardContent>
                        </Card>
                        <h3>Tailored For You </h3>
                        <p></p>
                    </div>

                    <div>
                        <Card raised={true}>
                            <CardContent>
                                <DevicesIcon style={{ fontSize: 150, color: '#616161' }} />
                            </CardContent>
                        </Card>
                        <h3> Responsive Layouts</h3>
                        <p></p>
                    </div>

                    <div>
                        <Card raised={true}>
                            <CardContent>
                                <DynamicFeedIcon style={{ fontSize: 150, color: '#616161' }} />
                            </CardContent>
                        </Card>
                        <h3>Dynamic</h3>
                        <p></p>
                    </div>
                </div>
                <div ref={aboutRef}>
                    <AboutHome />
                    <SmallScreeAbout />
                </div>
                <div ref={skillsRef}>
                    <Skills />
                </div>
                <div ref={experienceRef}>
                    <Experience />
                </div>
                <div ref={contactRef}>
                    <ForwardedContact />
                </div>

            </div>

        </StyleRoot>
    );
}

export default HomeMain;
