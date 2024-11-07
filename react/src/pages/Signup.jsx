import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import DotGraphic from '../assets/images/DotGraphic.png'
import CircleGraphic from '../assets/images/CircleGraphic.png'
import Logo from '../assets/images/Logo2.png'
import { FONTS } from '../assets/constants/themes.js'

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

import '../styles/LoginSignup.css'

function Signup() {
    const navi = useNavigate();

    return (
        <div className='container'>

            <ReactNotifications className='errNoti'/>

            <div id='loginHdr'>
                <img className='logo' src={ Logo } alt='Logo'/>

                <button 
                    id='signup' 
                    className='mainBtn' 
                    style={{fontFamily: FONTS.Regular}}
                    onClick={() => { navi('/Login') }}>Log In
                </button>
                <p className="secondBtn" onClick={() => {navi('/')}}>Home</p>

            </div>
            <img id='dots' src={ DotGraphic } alt='Dot Graphic'/>
            <img id='circle' src={ CircleGraphic } alt='Circle Graphic'/>

            <SignupForm />
        </div>
    )
}

export default Signup