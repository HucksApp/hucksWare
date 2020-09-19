import React from 'react';

import AppBar from '@material-ui/core/AppBar'


import Toolbar from '@material-ui/core/Toolbar'

import HucksLogo from './HucksLogo';
import DrawerButton from './DrawerButton'

import Tooltip from '@material-ui/core/Tooltip';



import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';







import '../Styles/top_nav.css'





export default function TopNav(props) {




    //aboutRef
    const handleChangeDark = () => {
        props.update_home(true)
    }

    const handleChange = (ref) => {

        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            duration: "6000"
        })
    }





    return (


        <AppBar color='default' position="sticky">
            <div className="top_nav">
                <Toolbar variant={'dense'} >
                    <div className="navCover">
                        <div className="navTopBotton">
                            <DrawerButton />
                        </div>
                        <div onClick={handleChangeDark} className="navTopBotton">
                            <Tooltip title='Home'>
                                <HomeIcon style={{ fontSize: 40, color: '#616161' }} />
                            </Tooltip>
                        </div>
                        <div onClick={() => handleChange(props.aboutRef)} className="navTopBotton">
                            <Tooltip title='About'>
                                <PersonIcon style={{ fontSize: 40, color: '#616161' }} />
                            </Tooltip>
                        </div>
                        <div onClick={() => handleChange(props.skillsRef)} className="navTopBotton">
                            <Tooltip title='Skills'>
                                <FormatPaintIcon style={{ fontSize: 40, color: '#616161' }} />
                            </Tooltip>
                        </div>
                        <div onClick={() => handleChange(props.experienceRef)} className="navTopBotton">
                            <Tooltip title='Experience'>
                                <WorkIcon style={{ fontSize: 40, color: '#616161' }} />
                            </Tooltip>
                        </div>
                        <div onClick={() => handleChange(props.contactRef)} className="navTopBotton">
                            <Tooltip title='Contact'>
                                <ContactsIcon style={{ fontSize: 40, color: '#616161' }} />
                            </Tooltip>
                        </div>
                    </div>


                    <div className="logo_div">
                        <HucksLogo />
                    </div>
                </Toolbar>
            </div>

        </AppBar>
    )
}
