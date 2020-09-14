import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring'


import AppBar from '@material-ui/core/AppBar'

import IconButton from '@material-ui/core/IconButton'

import Toolbar from '@material-ui/core/Toolbar'
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';

import HucksLogo from './HucksLogo';
import NavDrawer from './NavDrawer';

import '../Styles/top_nav.css'





export default function TopNav(props) {

    const [toggle, set] = useState(false)

    const [state, setState] = useState(false);

    const toggleDrawer = (openOrClose) => {

        setState(openOrClose)
        set(openOrClose)
    }
    let btn;

    if (!state) {
        btn = <MenuTwoToneIcon aria-label="menu" edge="start"  style={{ color: '#616161', fontSize: "60px" }} onClick={() => toggleDrawer(true)} />
           
    } else if (state) {

        btn = <CloseIcon edge="start"  style={{ color: '#616161', fontSize: "60px" }} />
          
    }




    return (

        
        <AppBar color={'F5F5F5'} position="sticky">
        
        <div className="top_nav">
        <Toolbar variant={'dense'} >
           
            <NavDrawer toggle={state} chaToggle={toggleDrawer}  update_home={props.update_home} />
            
            <IconButton>
                {btn}
            </IconButton>
            <div className="logo_div">
            <HucksLogo  />
            </div>
            </Toolbar>
        </div>
        
        </AppBar>
    )
}

//#616161 #949494 B5B5B5


