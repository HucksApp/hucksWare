import React from 'react';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton'

import '../Styles/hack.css'
import hackHucks from '../Images/hucks22.png'



const BiographyHack = (props) => {

    const handleClick = ()=>{
        props.screen('hacker')
    }


    return (
        <div className="hack">
            <img alt="hacker" className="hack_hucks" src={hackHucks}/>
            <span>
                <IconButton onClick={handleClick}>
                    <WhatshotIcon style={{fontSize:50,color:'#616161'}}/>
                </IconButton>
            <h3>HACKER</h3>
            </span>
            
        </div>
    );
}

export default BiographyHack;
