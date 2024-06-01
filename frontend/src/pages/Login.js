import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import DotGraphic from '../assets/images/DotGraphic.png'
import CircleGraphic from '../assets/images/CircleGraphic.png'
import Logo from '../assets/images/Logo2.png'
import { FONTS, SIZES } from '../constants/themes.js'

import '../styles/Login.css'

function Login() {
    const navi = useNavigate();

    return (
        <div className='container'>
            <div id='loginHdr'>
                <img className='logo' src={ Logo } />
                <button className='mainBtn' style={{fontFamily: FONTS.Regular}}>Sign Up</button>
                <p style={{fontFamily: FONTS.Regular, fontSize: SIZES.medium}}>Home</p>
                <p style={{color: 'black'}}>Login</p>
                <button onClick={ () => { navi('/Home') } }>Go to home</button>
            </div>
            <img id='dots' src={ DotGraphic } />
            <img id='circle' src={ CircleGraphic } />

            <LoginForm />
        </div>
    )
}

export default Login