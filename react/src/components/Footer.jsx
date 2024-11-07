import React from 'react'

import '../styles/Footer.css'
import Logo from '../assets/images/Logo2.png'
import { FONTS, SIZES, COLORS } from '../assets/constants/themes'

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Footer() {
    return(
        <div className='ftr' style={{backgroundColor: COLORS.black}}>
            <div id='ftrBody'>
                <div id='ftrContent'>

                    <div id='name'>
                        <img className='logo' src={ Logo } alt='logo'/>
                        <p style={ {fontFamily: FONTS.Title, fontSize: '1.5rem', color: COLORS.white, margin: '0% 2%'}}>Finara</p>
                    </div>

                    <div id='ftrLinks'>
                        <p className='ftrTxt'>About Us</p>
                        <p className='ftrTxt'>Contact</p>
                        <p className='ftrTxt'>Our Team</p>
                    </div>

                    <div id='socials'>
                        <InstagramIcon sx={{width: '1.8vw'}} className='ftrIcon'/>
                        <LinkedInIcon sx={{width: '1.8vw'}} className='ftrIcon'/>
                        <XIcon sx={{width: '1.8vw'}} className='ftrIcon'/>
                    </div>
                </div>

                <div id='hrDiv'><hr id='horizLine' /></div>

                <div id='ftrCopyright'>
                    <p id='copyright'>Copyright 2024 Finara Solutions. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer