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
              A white Hat Hacker, with long years of experience in Kali-Linux and Kali tools,..Wire Shark, Nmap , Rapid7 frameworks, AirCrack-ng.Creation of Exploitaion Sofwares,Malware,Wireless Hacking, Social Engineering, Reverse Engineering....
              Curiosity create persistency and exploiration. within Skills and Knowledge evolves.You need to be be good at been Bad To beat The Bad..
        <div style={{ color: '#aa84e0' }}>Grew more eyes to watch my back </div>
            </article>
          </Paper>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Hacker;
