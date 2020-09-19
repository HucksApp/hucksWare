import React from 'react';
import { withRouter } from 'react-router-dom'


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PanToolIcon from '@material-ui/icons/PanTool';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


import '../Styles/comingsoon.css'


const styles = {
    fadeInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}





const ComingSoon = (props) => {

    const handleBack = () => {
        console.log(props)
        props.history.push('/')
    }




    return (
        <StyleRoot>
            <div style={styles.fadeInUp} className='comingSoon'>
                <div className='comingback'>
                    <IconButton onClick={handleBack}>
                        <KeyboardBackspaceIcon style={{ fontSize: 60, color: '#616161' }} />
                    </IconButton>
                </div>
                <Card raised={true}>
                    <CardContent>
                        <PanToolIcon style={{ fontSize: 200, color: '#616161' }} />
                        <Typography>
                            <h2 style={{ color: '#616161', padding: 30 }}> Not Available. Coming Soon..</h2>
                        </Typography>
                    </CardContent>

                </Card>


            </div>
        </StyleRoot>
    );
}

export default withRouter(ComingSoon);
