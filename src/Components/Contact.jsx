import React from 'react';

import ContactForm from './ContactForm'
import Footer from './Footer'

import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';

import '../Styles/contact.css'





const Contact = (props) => {


    const handleScrollTop = () => {



        props.scrollTop.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            duration: "6000"
        })


    }





    return (
        <div className='contactHome'>
            <svg preserveAspectRatio='none' viewBox='0 0 100 102' height='75' width='100%'

                version='1.1' xmlns='http://w3.org/2000/svg' className='svgcolor-light'
            >
                <path d='M0 0 L50 100 L100 0 Z' fill='#F5F5F5' stroke='#F5F5F5'></path>

            </svg>
            <div className='contactSubContain'>
                <div className="underlineContain">
                    <h1>CONTACT</h1>
                    <p className="underlinetag"></p>
                </div>
                <div className="formContain">
                    <ContactForm />
                </div>
                <div className='scroller' >
                    <div onClick={handleScrollTop}>
                        <Tooltip title='Sroll Up' aria-label='Sroll Up'>
                            <IconButton >
                                <VerticalAlignTopIcon style={{ fontSize: 80, color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className='footer'>
                    <Footer />
                </div>


            </div>
        </div>
    );
}

export default Contact;
