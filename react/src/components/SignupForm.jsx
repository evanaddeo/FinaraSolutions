import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import CustomDropdown from './CustomDropdown'
import { usStates, countries } from '../assets/constants/data'
import BudgetWoman from '../assets/images/budgetwoman.jpg'
import { FONTS, SIZES } from '../assets/constants/themes'
import { updateDropdown1, updateDropdown2, signupAuth } from '../utils/auth.js'

import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

import WhiteLogo from '../assets/images/WhiteLogo.png'

import '../styles/LoginSignupForm.css'

function SignupForm() {

    const navi = useNavigate();

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const [wrongEntry, setWrongEntry] = useState('');

    // Handle Submission by "Sign Up" Button
    const handleSubmit = (e) => {
        e.preventDefault();

        const signupInfo = {
            firstName: first,
            lastName: last,
            email: email,
            phoneNumber: phone,
            password: password,
            confirmPassword: confirmPassword,
            state: state,
            country: country,
        };

        if (wrongEntry.length > 0) { 
            document.getElementById(wrongEntry).classList.remove('wrongEntry'); 
        }

        const result = signupAuth(signupInfo);

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

        let errTitle = 'Error';
        let errMsg = '';

        if (msg.length < 30) {
            errTitle = `Error: ${msg}`;
        } else {
            errMsg = msg;
        }

        Store.addNotification({
            title: errTitle,
            message: errMsg,
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

                <p style={{fontSize: '.9rem'}}id='welcome'>WELCOME TO</p>
                <div id='titleContainer'>
                    <img style={{marginLeft: '-1vw'}}className='smallLogo' src={ WhiteLogo } alt='white logo' />
                    <p style={{fontFamily: FONTS.Title, fontSize: '3rem', color: '#eff0f3'}}>Finara</p>
                </div>
                <p id='phrase' style={{fontSize: '.9rem'}}>Sign up to take control of your financial future today.</p>

                <form onSubmit={handleSubmit} name='myForm'>
                    <input 
                        id='first'
                        className='input'
                        style={{marginRight: '3.5%'}}
                        placeholder='First Name'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        required
                    />
                    <input 
                        id='last'
                        className='input'
                        placeholder='Last Name'
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        required
                    /><br></br>
                    <input 
                        id='email'
                        className='input'
                        style={{width: '96.5%'}}
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br></br>
                    <input 
                        id='phone'
                        className='input'
                        style={{width: '96.5%'}}
                        type='tel'
                        placeholder='Phone Number'
                        value={phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    /><br></br>
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
                    <input 
                        id='confirmPassword'
                        className='input'
                        style={{width: '96.5%'}}
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            console.log({confirmPassword})
                        }}
                        required
                    /><br></br>

                    <div id='locationSelectors'>
                        <div className='dropdownWrapper' id='dropdown1'>
                            <CustomDropdown 
                                options={usStates}
                                value={state}
                                onChange={(newValue) => setState(newValue)}
                                required
                                update={() => {updateDropdown1()}}
                            />
                        </div>
                        <div style={{marginLeft: '2.5%'}}></div>
                        <div className='dropdownWrapper' id='dropdown2'>
                            <CustomDropdown 
                                options={countries}
                                value={country}
                                onChange={(newValue) => setCountry(newValue)}
                                required
                                update={() => {updateDropdown2()}}
                            />
                        </div>
                    </div>
                </form>

                <button 
                    id='submitter' 
                    type='submit' 
                    className='mainBtn'
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>

                <p style={{color: '#dadbde'}}>Already have an account? 
                    <a 
                        style={{fontWeight: 'bold', color: '#eff0f3', cursor: 'pointer'}}
                        onClick={() => { navi('/Login') }}> Log In Now.
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignupForm