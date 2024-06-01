import React from 'react'
import { FONTS, SIZES, COLORS } from '../constants/themes'
import '../styles/Header.css'

import Logo from '../assets/images/Logo2.png'

function Header(signedIn) {

    const button1Text = signedIn ? 'Sign Out' : 'Log In';
    const button2Text = signedIn ? 'Profile' : 'Get Started';

    return (
        <div className='hdr'>
            <div className='hdrBody'>
                <div className='hdrNav'>
                    <img className='logo' src={ Logo } alt='logo' />
                    <p id="hdrTitle" style={ {fontFamily: FONTS.Title, fontSize: SIZES.xxlarge, fontWeight: 700, color: COLORS.black}}>Finara</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>Home</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>Budget</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>Metrics</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>Investing</p>
                </div>
                <div className='hdrProfile'>
                    <p style={ {fontFamily: FONTS.Regular}}>{button1Text}</p>
                    <button id='actionBtn' className='mainBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>{button2Text}</button>
                </div>
            </div>
        </div>
    )
}

export default Header