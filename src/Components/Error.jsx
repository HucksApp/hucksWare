import React from 'react';
import { withRouter } from 'react-router-dom'


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import LocationOffIcon from '@material-ui/icons/LocationOff';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


import '../Styles/error.css'


const styles = {
    fadeInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}




const Error = (props) => {


    const handleBack = () => {
        props.history.push('/')
    }




    return (
        <StyleRoot>
            <div className='error' style={styles.fadeInUp}>
                <div>
                    <IconButton button="true" onClick={handleBack}>
                        <KeyboardBackspaceIcon style={{ fontSize: 60, color: '#616161' }} />
                    </IconButton>
                </div>
                <Card raised={true}>

                    <CardContent>
                        <LocationOffIcon style={{ fontSize: 250, color: '#616161' }} />
                    </CardContent>

                    <CardHeader
                        style={{ color: '#616161', padding: 15 }}
                        title={'Error, Page Do Not Exist'}
                    />
                </Card>
            </div>
        </StyleRoot>
    );
}

export default withRouter(Error);
