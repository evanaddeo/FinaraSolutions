import React from 'react'
import { FONTS, SIZES, COLORS } from '../constants/themes'
import '../styles/Header.css'

import Logo from '../assets/images/Logo2.png'

function Header() {
    return (
        <div className='hdr'>
            <div className='hdrBody'>
                <div className='hdrNav'>
                    <img className='logo' src={ Logo } alt='logo' />
                    <p id="hdrTitle" style={ {fontFamily: FONTS.Title, fontSize: SIZES.xlarge, fontWeight: 700, color: COLORS.black}}>Finara</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>Home</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>Budget</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>Metrics</p>
                    <p className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>Investing</p>
                </div>
                <div className='hdrProfile'>
                    <p style={ {fontFamily: FONTS.Regular}}>Login</p>
                    <p style={ {fontFamily: FONTS.Regular}}>Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Header