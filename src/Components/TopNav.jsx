import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring'


import AppBar from '@material-ui/core/AppBar'

import IconButton from '@material-ui/core/IconButton'

import Toolbar from '@material-ui/core/Toolbar'
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';

import HucksLogo from './HucksLogo';
import NavDrawer from './NavDrawer';

import Tooltip from '@material-ui/core/Tooltip';



import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactsIcon from '@material-ui/icons/Contacts';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';







import '../Styles/top_nav.css'





export default function TopNav(props) {


   

    //aboutRef
    const  handleChangeDark = () => {
        props.update_home(true)
    }

    const  handleChange = (ref) => {
        
        ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "6000"
      })

      
}
    



    return (

        
        <AppBar color={'F5F5F5'} position="sticky">
        
        <div className="top_nav">
        <Toolbar variant={'dense'} >
            <div className="navCover">
            <div onClick={handleChangeDark} className="navTopBotton"> 
            <Tooltip title='Home'>      
                <HomeIcon style={{fontSize: 40, color:'#616161' }}/>
            </Tooltip>
            </div>
            <div onClick={()=>handleChange(props.aboutRef)} className="navTopBotton">
            <Tooltip title='About'>
                <PersonIcon style={{fontSize: 40, color:'#616161' }}/>        
            </Tooltip>
            </div>
            <div onClick={()=>handleChange(props.skillsRef)} className="navTopBotton">
            <Tooltip title='Skills'>
                <FormatPaintIcon style={{fontSize: 40, color:'#616161' }}/>           
            </Tooltip>
            </div>
            <div onClick={()=>handleChange(props.experienceRef)} className="navTopBotton">
            <Tooltip title='Experience'>            
                <WorkIcon style={{fontSize: 40, color:'#616161' }}/>           
            </Tooltip>
            </div>
            <div  onClick={()=>handleChange(props.contactRef)} className="navTopBotton">
            <Tooltip title='Contact'>
                <ContactsIcon style={{fontSize: 40, color:'#616161' }}/> 
            </Tooltip>
            </div>           
            </div>
            
            
            <div className="logo_div">
            <HucksLogo  />
            </div>
            </Toolbar>
        </div>
        
        </AppBar>
    )
}

//#616161 #949494 B5B5B5


