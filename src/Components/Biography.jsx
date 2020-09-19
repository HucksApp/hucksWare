import React from 'react';

import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton'



import hucks from '../Images/hucks22.png'


import '../Styles/biography.css'



const Biography = (props) => {

    const handleClick = () => {
        props.screen('coder')
    }


    return (
        <div className='biography'>
            <span >
                <IconButton onClick={handleClick}>
                    <CodeIcon style={{ fontSize: 50, color: '#616161' }} />
                </IconButton>
                <h3>CODER</h3>
            </span>
            <img alt="hucks" className="hucks" src={hucks} />


        </div>

    );
}

export default Biography;
