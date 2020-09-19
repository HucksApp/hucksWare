import React, { useState } from 'react';

import { withStyles } from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Mailer from '../workers/frontMailer'

import toastr from '../workers/Notification';


import '../Styles/form.css'

const styles = {
    input: {
        color: '#F5F5F5'
    }
};



const ContactForm = ({ classes }) => {

    let initialState = {
        name: "",
        email: "",
        message: ""
    }
    const [state, setState] = useState(initialState)







    const handleChange = (e) => {

        let copyState = { ...state }
        copyState[e.target.id] = e.target.value
        setState(copyState)

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let i;
        let badData;
        for (i in state) {
            if (i === 'name') {
                if (state[i] === "") {
                    badData = true
                    toastr.error('Please Fill In Your Name')
                    break

                }
            } else if (i === 'email') {
                if (state[i] === "" || !state[i].includes('@') || !state[i].includes('.')) {
                    badData = true
                    toastr.error('The Email You Entered Is Not a Valid Email')
                    break
                }

            } else if (i === 'message') {
                if (state[i] === "") {
                    badData = true
                    toastr.error('Fill In Details of Your Request')
                    break
                }
            }

        }
        if (!badData) {

            //Need to adapt to my Api .


            Mailer(state)
            setState(initialState)

            toastr.success('Thank Your For Contacting me. I will Get Back To You Shortly')
        }
    }






    return (
        <div className='form' >
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='textSection'>
                    <div style={{ color: '#fff' }} className='formHead'>
                        <MailIcon style={{ fontSize: 30 }} />
                        <h3  >Have a question or want to make a request?</h3>
                    </div>

                    <TextField onChange={handleChange} id='name' InputProps={{ className: classes.input }}
                        style={{ marginBottom: 10 }}
                        value={state.name}
                        InputLabelProps={{ style: { color: '#F5F5F5' } }}
                        label="Name" variant="filled" />

                    <TextField onChange={handleChange} id='email' InputLabelProps={{ style: { color: '#F5F5F5' } }}
                        InputProps={{ className: classes.input }}
                        value={state.email}
                        style={{ marginBottom: 10 }} color='secondary'
                        label="Enter Email" variant="filled" />

                    <TextField onChange={handleChange} id='message' InputLabelProps={{ style: { color: '#F5F5F5' } }}
                        value={state.message}
                        InputProps={{ className: classes.input }}
                        multiline rows={6} label="Your Message" variant="filled" />

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

export default withStyles(styles)(ContactForm);
