import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import '../Styles/form.css'

const styles = {
   input:{
        color:'#F5F5F5'
    }
};


const ContactForm = ({classes}) => {
    return (
        <div className='form' >
            <form autoComplete='off'>
                <div  className='textSection'>
                <div style={{color: '#fff'}} className='formHead'>
                <MailIcon style={{fontSize:30}}/>
                <h3  >Have a question or want to make a request?</h3>
                </div>
                
            <TextField InputProps={{className: classes.input}} 
             style={{marginBottom:10}}
              InputLabelProps={{style: { color: '#F5F5F5' }}} 
              required  label="Name" variant="filled" />

            <TextField  InputLabelProps={{style: { color: '#F5F5F5' }}} 
            InputProps={{className: classes.input}} 
            style={{marginBottom:10}} color='secondary'  
            required  label="Enter Email" variant="filled" />

            <TextField InputLabelProps={{style: { color: '#F5F5F5' }}}
            InputProps={{className: classes.input}} 
            required multiline rows={6} label="Your Message" variant="filled" />

            </div>
                <div className='submit'>
                <button   >
                        SUBMIT
                    </button>
                    </div>
            </form>
            
        </div>
    );
}

export default withStyles(styles)( ContactForm );
