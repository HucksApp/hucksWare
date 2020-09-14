import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Typography from '@material-ui/core/Typography';




import {  backInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



const styles = {
    backInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(backInRight, 'backInRight')
  }}









const Question = () => {
    return (
        <StyleRoot>
        <div styles={styles.backInRight}>
            
            <Card raised={true}>
        <CardContent> 
                <LiveHelpIcon style={{fontSize: 150,color:'#616161'}}/>
                <Typography  style={{color:'#616161'}}>
                    Click On Icons Above My Avartar To Select the Side You Love To Know
                </Typography>
            </CardContent>
        </Card>
            
        </div>
        </StyleRoot>
    );
}

export default Question;
