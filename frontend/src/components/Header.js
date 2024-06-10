import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FONTS, SIZES, COLORS } from '../constants/themes'
import '../styles/Header.css'

import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

import Logo from '../assets/images/Logo2.png'

function Header({signedIn}) {

    const navi = useNavigate();

    const button1Text = signedIn ? 'Sign Out' : 'Log In';

    // Event Listener to display proper buttons
    // depending on whether user is signed in
    window.addEventListener('load', function() {
        if (signedIn) {
            document.getElementById('signup').classList.add('hideItem');
        } else {
            console.log('should remove profile')
            document.getElementById('profile').classList.add('hideItem');
        }
        console.log('finished onLoad')
        console.log(signedIn)
    });
    

    return (
        <div className='hdr'>
            <div className='hdrBody'>

                <div className='hdrNav'>
                    <img className='logo' src={ Logo } alt='logo' />
                    <p id="hdrTitle" style={ {fontFamily: FONTS.Title, fontSize: SIZES.large, fontWeight: 700, color: COLORS.black}}>Finara</p>

                    <button className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>
                        <HomeIcon sx={{width: '1.4vw', marginBottom: '.2vh'}}className='hdrIcon'/>Home
                    </button>
                    <button className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>
                        <AccountBalanceIcon sx={{width: '1.3vw'}}className='hdrIcon'/>Budget
                    </button>
                    <button className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>
                        <BarChartOutlinedIcon sx={{width: '1.4vw', marginBottom: '.2vh'}}className='hdrIcon'/>Metrics
                    </button>
                    <button className='navBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>
                        <AttachMoneyIcon sx={{width: '1.4vw'}}className='hdrIcon'/>Investing
                    </button>
                </div>

                <div className='hdrProfile'>
                    <p className='secondBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>{button1Text}</p>
                    <button 
                        id='signUp' 
                        className='actionBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small, marginLeft: '4%'}}
                        onClick={() => { navi('/Signup')}}>
                        Get Started
                    </button>
                    <button id='profile' className='actionBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small, width: '2.5vw'}}>
                        <SettingsIcon sx={{width: '1.4vw'}}className='hdrIcon'/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header