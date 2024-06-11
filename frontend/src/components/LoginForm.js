import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import BudgetWoman from '../assets/images/budgetwoman.jpg'
import { FONTS, SIZES } from '../constants/themes'
import { Checkbox } from 'primereact/checkbox'
import { loginAuth } from '../utils/auth.js'

import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

import WhiteLogo from '../assets/images/WhiteLogo.png'

import '../styles/LoginSignupForm.css'

function LoginForm() {

    const navi = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [checked, setChecked] = useState(false);
    const [wrongEntry, setWrongEntry] = useState('');


    // Handle Submission by "Sign Up" Button
    const handleSubmit = (e) => {
        e.preventDefault();

        const loginInfo = {
            email: email,
            password: password,
        };

        if (wrongEntry.length > 0) { 
            document.getElementById(wrongEntry).classList.remove('wrongEntry'); 
        }

        const result = loginAuth(loginInfo);

        if (result.success) {
            // Continue correctly
        } else {
            errorShake(result.msg, result.failField);
        }
    }

    // Adds shake animation & red drop shadow to incorrect input field
    //
    // @param msg: Message to be displayed in error notification
    // @param failField: input field id where error occurred
    const errorShake = (msg, failField) => {

        if(failField.length > 0) {
            const incorrect = document.getElementById(failField);
            incorrect.classList.add('invalid')
            incorrect.classList.add('wrongEntry')
            setWrongEntry(failField);

            incorrect.addEventListener('animationend', () => {
                incorrect.classList.remove('invalid');
            })
        }

        Store.addNotification({
            title: 'Error',
            message: msg,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
              showIcon: true,
            }
          });
    }

    return (
        <div id='formContainer'>

            <div style={{flex: .5, backgroundColor: 'white', borderRadius: '15px 0px 0px 15px'}}>
                <img id='budgetWoman' src={BudgetWoman} alt='Budget Woman'/>
            </div>

            <div id='loginWrapper'>

                <div style={{display: 'flex', alignItems: 'center', marginBottom: '-1vh', marginTop: '10vh'}}>
                    <img style={{marginLeft: '-1vw'}} className='xsmallLogo' src={ WhiteLogo } alt='white logo' />
                    <p style={{fontFamily: FONTS.Regular, color: '#eff0f3', fontSize: '1.2rem'}}>Finara</p>
                </div>
                    
                <div id='titleContainer'>
                    <p style={{fontFamily: FONTS.Title, fontSize: '4rem', color: '#eff0f3'}}>Log In</p>
                </div>

                <p id='phrase' style={{fontSize: '.9rem', marginBottom: '3vh', marginTop: '5vh'}}>Log in to stay on top of all your spending goals!</p>

                <form onSubmit={handleSubmit} name='myForm'>
                    <input 
                        id='email'
                        className='input'
                        style={{width: '96.5%'}}
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        id='password'
                        className='input'
                        style={{width: '96.5%'}}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br></br>

                </form>

                <div id='loginOptions'>

                    <div className='optionWrapper' style={{justifyContent: 'flex-start'}}>
                        <Checkbox 
                            id='check'
                            onChange={(e) => {
                                setChecked(e.checked)
                            }} 
                            checked={checked}
                            style={{width: '2vw'}}>
                        </Checkbox>
                        <p style={{color: '#eff0f3', fontSize: '.9rem'}}>Remember Me</p>
                    </div>

                    <div className='optionWrapper' style={{justifyContent: 'flex-end'}}>
                        <p><a style={{color: '#eff0f3', cursor: 'pointer', fontSize: '.9rem'}}>
                            Forgot Password?</a>
                        </p>

                    </div>
                </div>

                <button 
                    id='submitter' 
                    type='submit' 
                    className='mainBtn'
                    onClick={handleSubmit}>Log In
                </button>

                <p style={{color: '#dadbde'}}>Don't have an account? 
                    <a 
                        style={{fontWeight: 'bold', color: '#eff0f3', cursor: 'pointer'}}
                        onClick={ () => { navi('/Signup') }}> Sign Up Now.
                    </a>
                </p>

            </div>
        </div>
    )
}

export default LoginForm