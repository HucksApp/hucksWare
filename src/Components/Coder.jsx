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






const Coder = () => {
    return (
        <StyleRoot>
            <div style={styles.zoomIn} >
                <div className="coder">
                    <Paper elevation={5}>
                        <article style={{ color: '#616161' }}>
                            A Senior Full-Stack Software Engineer with 6+ years experience. I'm experienced with various Software Development Methodologies and Adaptation. I convert user stories into well-written, thoroughly-tested, non-redundant and efficient lines of code, resulting in lovable products with good user experience while taking care of all possible edge cases.
                            Turn your dreams into reality.
            <div style={{ color: '#aa84e0' }}>What Would You Like To Build.? An Expect Software Engineer is at Your Finger Tip</div>
                        </article>
                    </Paper>
                </div>
            </div>
        </StyleRoot>
    );
}

export default Coder;
