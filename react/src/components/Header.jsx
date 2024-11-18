import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FONTS, SIZES, COLORS } from '../assets/constants/themes'
import '../styles/Header.css'

import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

import Logo from '../assets/images/Logo2.png'


// selectedBtnId == home || budget || metrics || invest
function Header({ signedIn, selectedBtnId }) {

    const navi = useNavigate();

    const button1Text = signedIn ? 'Sign Out' : 'Log In';


    useEffect(() => { 

        // Execute dynamic hdr updates every time component is rendered
        if (signedIn) {
            document.getElementById('signup').classList.add('hideItem');
        } else {
            document.getElementById('profile').classList.add('hideItem');
        }

        document.getElementById(selectedBtnId).classList.add('clicked');

    }, [signedIn, selectedBtnId]); // Dependency array ensures re-run on changes
    

    return (
        <div className='hdr'>
            <div className='hdrBody'>

                <div className='hdrNav'>
                    <img className='logo' src={ Logo } alt='logo' />
                    <p id="hdrTitle" style={ {fontFamily: FONTS.Title, fontSize: '1.4rem', color: COLORS.black}}>Finara</p>

                    <button 
                        id='home' 
                        className='navBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={ () => { navi('/Home') } }
                    >
                        <HomeIcon sx={{width: '1.4vw', marginBottom: '.2vh'}}className='hdrIcon'/>
                        Home
                    </button>
                    <button 
                        id='budget' 
                        className='navBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={ () => { navi('/Budget') } }
                    >
                        <AccountBalanceIcon sx={{width: '1.3vw'}}className='hdrIcon'/>
                        Budget
                    </button>
                    <button 
                        id='metrics' 
                        className='navBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={ () => { navi('/Metrics') } }
                    >
                        <BarChartOutlinedIcon sx={{width: '1.4vw', marginBottom: '.2vh'}}className='hdrIcon'/>
                        Metrics
                    </button>
                    <button 
                        id='invest' 
                        className='navBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={ () => { navi('/Investing') } }
                    >
                        <AttachMoneyIcon sx={{width: '1.4vw'}}className='hdrIcon'/>
                        Investing
                    </button>
                </div>

                <div className='hdrProfile'>
                    <p 
                        className='secondBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={ () => {
                            navi('/Login')
                        }}
                    >
                        {button1Text}
                    </p>
                    <button 
                        id='signup' 
                        className='actionBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small, marginLeft: '4%'}}
                        onClick={() => { navi('/Signup')}}>
                        Get Started
                    </button>
                    <button id='profile' className='actionBtn' style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small, marginLeft: '4%'}}>
                        <SettingsIcon sx={{width: '1.4vw'}}className='hdrIcon'/>
                        Profile
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header