import React, { useState } from "react"
import CustomDropdown from './CustomDropdown.js'
import { usStates, countries } from '../constants/placeLists.js'
import BudgetWoman from '../assets/images/budgetwoman.jpg'
import { FONTS, SIZES } from '../constants/themes'
import { updateDropdown1, updateDropdown2, loginAuth } from '../utils/auth.js'

import WhiteLogo from '../assets/images/WhiteLogo.png'

import '../styles/LoginSignupForm.css'

function LoginForm() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    // Handle Submission by "Log In" Button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Confirmed');
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
                    <p style={{fontFamily: FONTS.Title, fontSize: SIZES.xxlarge, color: '#eff0f3'}}>Finara</p>
                </div>
                <p id='phrase' style={{fontSize: '.9rem'}}>Sign up to take control of your financial future today.</p>

                <form onSubmit={handleSubmit} name='myForm'>
                    <input 
                        style={{marginRight: '2.5%'}}
                        placeholder='First Name'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        required
                    />
                    <input 
                        placeholder='Last Name'
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        required
                    /><br></br>
                    <input 
                        style={{width: '96.5%'}}
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br></br>
                    <input 
                        style={{width: '96.5%'}}
                        type='tel'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    /><br></br>
                    <input 
                        style={{width: '96.5%'}}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br></br>
                    <input 
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
                    onClick={handleSubmit}>Log In
                </button>

                <p style={{color: '#dadbde'}}>Don't have an account? 
                    <a 
                        style={{fontWeight: 'bold', color: '#eff0f3'}}
                        cursor= 'pointer'
                        onClick={ () => { navigator('/Signup') }}> Sign Up Now.
                    </a>
                </p>

            </div>
        </div>
    )
}

export default LoginForm