import React,{useState} from 'react';


import WhatshotIcon from '@material-ui/icons/Whatshot';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton'

import Hacker from './Hacker'
import Question from './Question'
import Coder from './Coder'


import '../Styles/smallscreen.css'
import hackHucks from '../Images/hucks22.png'






const SmallScreeAbout = () => {

    let currentScreen;

    const [messageState, setMessage] =  useState('question')

    const handlescreenCoder = ()=>{
            setMessage("coder")
    }

    const handlescreenHacker = ()=>{
        setMessage("hacker")
}

    

    if (messageState === 'question') {
        currentScreen= <Question/>
     }else if (messageState === 'coder'){
        currentScreen= <Coder/>
     }else if (messageState === 'hacker'){
        currentScreen= <Hacker/>
     }



    return (
        <div className="smallscreenCont">
            <div>
                <img className='hackSmallscreen' alt='Hucks' src={hackHucks} />
            </div>
             <div className='ssIconCover'>
             <div className='profile_message'>
                <h3>
            Who's this guy?
            `</h3>
                {currentScreen}

            </div>
            <div className="buttonContSmallscreen">
                <div className='iconDiv' >
                <IconButton onClick={handlescreenCoder}>
                    <CodeIcon style={{fontSize:30,color:'#616161'}}/>
                </IconButton>
                <h3>Coder</h3>
                </div>
                <div className='iconDiv'>
                <IconButton onClick={handlescreenHacker}>
                    <WhatshotIcon style={{fontSize:30,color:'#616161'}}/>
                </IconButton>
                <h3>Hacker</h3>
                </div>
            </div>
               
            </div>
         
        </div>
    );
}

export default SmallScreeAbout;
