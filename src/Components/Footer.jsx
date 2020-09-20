import React from 'react';


import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';


import DvrIcon from '@material-ui/icons/Dvr';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import '../Styles/footer.css'


const Footer = () => {
    return (
        <div className='footercont'>

            <div className="socialCont">
                <div className='socials'>
                    <a href="https://www.codementor.io/@hucksapp" rel='noopener noreferrer' target="_blank">
                        <Tooltip title='Codementor'>
                            <IconButton>
                                <DvrIcon style={{ fontSize: 30, color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/arabprince/" rel='noopener noreferrer' target="_blank">
                        <Tooltip title='LinkedIn'>
                            <IconButton>
                                <LinkedInIcon style={{ fontSize: 30, color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>
                <div className='socials'>
                    <a href="https://github.com/HucksApp" rel='noopener noreferrer' target="_blank">
                        <Tooltip title='Git Hub'>
                            <IconButton>
                                <GitHubIcon style={{ fontSize: 30, color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>
                <div className='socials'>
                    <a href="https://twitter.com/hucks_jake" rel='noopener noreferrer' target="_blank">
                        <Tooltip title='Twitter'>
                            <IconButton>
                                <TwitterIcon style={{ fontSize: 30, color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>

            </div>
            <div className='copywright' >
                <span style={{ color: '#fff', fontSize: 20 }}>Hucks <span style={{ color: '#aa84e0' }}>&copy;2019</span></span>
            </div>

        </div>
    );
}

export default Footer;
