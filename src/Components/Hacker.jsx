import React from 'react';
import Paper from '@material-ui/core/Paper';




import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



const styles = {
     zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes( zoomIn, ' zoomIn')
  }}


const Hacker = () => {
    return (
        <StyleRoot>
        <div style={styles.zoomIn} >
         <div className="hacker_screen">
        <Paper elevation={5}>
        <article style={{color:'#616161'}}>
        I have long years of experience in Kali-Linux and Kali tools,Wire Shark, Nmap , Rapid7 framewoks, AirCrack-ng.Creaction of Exploitaion Sofwares,Malware,Wireless Hacking, Social Engineering, Reverse Engineering....I love to break the rules,I feel rules are not for the curious .I only hack What i Have Permission to hack
        </article>
        </Paper>
    </div>
    </div>
    </StyleRoot>
    );
}

export default Hacker;
