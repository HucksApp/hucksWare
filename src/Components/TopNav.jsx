import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring'


import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';

import HucksLogo from './HucksLogo';
import NavDrawer from './NavDrawer';

import '../Styles/top_nav.css'





export default function TopNav(props) {

    const [toggle, set] = useState(false)
    const prop = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 0.5 })
            await next({ opacity: 0.1 })
        },
        from: { opacity: 0, color: "white" }
    })






    const [state, setState] = useState(false);

    const toggleDrawer = (openOrClose) => {

        setState(openOrClose)
        set(openOrClose)
    }
    let btn;

    if (!state) {
        btn = <animated.div style={prop}>
                <MenuTwoToneIcon style={{ color: props.color_type, fontSize: "60px" }} onClick={() => toggleDrawer(true)} />
            </animated.div>
    } else if (state) {

        btn = <animated.div style={prop}>
                <CloseIcon style={{ color: props.color_type, fontSize: "60px" }} />
            </animated.div>
    }



    return (

        <div className="top_nav">
            <NavDrawer toggle={state} chaToggle={toggleDrawer} />
            <div>
                {btn}
            </div>

            <HucksLogo />

        </div>

    )
}