import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import DotGraphic from '../assets/images/DotGraphic.png'
import CircleGraphic from '../assets/images/CircleGraphic.png'
import Logo from '../assets/images/Logo2.png'
import { FONTS } from '../assets/constants/themes.js'

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

import '../styles/LoginSignup.css'

function Login() {
    const navi = useNavigate();

    return (
        <div id='test' className='container'>

            <ReactNotifications className='errNoti'/>

            <div id='loginHdr'>
                <img className='logo' src={ Logo } alt='Logo'/>

                <button 
                    id='signup' 
                    className='mainBtn' 
                    style={{fontFamily: FONTS.Regular}}
                    onClick={ () => { navi('/Signup') }}>Sign Up
                </button>
                <p className="secondBtn" onClick={() => {navi('/')}}>Home</p>
            </div>

            <img id='dots' src={ DotGraphic } alt='Dot Graphic'/>
            <img id='circle' src={ CircleGraphic } alt='Circle Graphic'/>

            <LoginForm />
        </div>
    )
}

export default Login