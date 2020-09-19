import React, { useState, useRef } from 'react';

import Hacker from './Hacker'
import Question from './Question'
import Coder from './Coder'
import Biography from './Biography'
import BiographyHack from './BiographyHack'
import '../Styles/about_home.css'

const AboutHome = () => {
    let currentScreen;

    const [messageState, setMessage] = useState('question')







    const [widthsDark, updateDarkWidths] = useState("275px")
    const [widthsWhite, updateWhiteWidths] = useState("275px")


    const darkHucks = useRef(null)
    const whiteHucks = useRef()

    const changeStylesDarkLeave = () => {
        updateDarkWidths("275px")
        updateWhiteWidths("275px")

    }


    const changeStylesDarkEnter = () => {
        updateDarkWidths("580px")
        updateWhiteWidths("0px")

    }

    const changeStylesWhiteLeave = () => {
        updateDarkWidths("275px")
        updateWhiteWidths("275px")

    }

    const changeStylesWhiteEnter = () => {
        updateWhiteWidths("580px")
        updateDarkWidths("0px")

    }



    if (messageState === 'question') {
        currentScreen = <Question />
    } else if (messageState === 'coder') {
        currentScreen = <Coder />
    } else if (messageState === 'hacker') {
        currentScreen = <Hacker />
    }



    return (
        <div className='aboutHome'>
            <div className='about_home'>
                <div onMouseLeave={changeStylesWhiteLeave} onMouseEnter={changeStylesWhiteEnter} style={{ width: widthsWhite }} ref={whiteHucks} id='bio_div' >
                    <Biography screen={setMessage} />
                </div>
                <div onMouseEnter={changeStylesDarkEnter} onMouseLeave={changeStylesDarkLeave} style={{ width: widthsDark }} ref={darkHucks} id='hack_div'>
                    <BiographyHack screen={setMessage} />
                </div>



            </div>
            <div className='profile_message'>
                <h3>
                    Who's this guy?
            </h3>
                {currentScreen}

            </div>
        </div>
    );
}

export default AboutHome;
