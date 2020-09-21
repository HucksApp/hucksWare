import React from 'react';
import Paper from '@material-ui/core/Paper';




import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



const styles = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, ' zoomIn')
  }
}


const Hacker = () => {
  return (
    <StyleRoot>
      <div style={styles.zoomIn} >
        <div className="hacker_screen">
          <Paper elevation={5}>
            <article style={{ color: '#616161' }}>
              Hacking is a calling , I can't reject.
              I have long years of experience in Kali-Linux and Kali tools,..Wire Shark, Nmap , Rapid7 frameworks, AirCrack-ng.Creation of Exploitaion Sofwares,Malware,Wireless Hacking, Social Engineering, Reverse Engineering....I love to break the rules,I feel rules are not for the curious.What is the benefit of life when You cant explore it,Though I only hack What i have permission to hack.              
        <div style={{ color: '#aa84e0' }}>What Would You Do when You Have a Professional Ethical Hacker at Your Disposal.</div>
            </article>
          </Paper>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Hacker;
