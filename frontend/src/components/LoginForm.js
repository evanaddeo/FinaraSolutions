import React, { useState } from "react"
import CustomDropdown from './CustomDropdown.js'
import { usStates, countries } from '../constants/placeLists.js'
import BudgetWoman from '../assets/images/budgetwoman.jpg'

import '../styles/LoginForm.css'

function LoginForm() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Confirmed')
    }

    return (
        <div id='formContainer'>
            <div style={{flex: .5, backgroundColor: 'white', borderRadius: '15px 0px 0px 15px'}}>
                <img id='budgetWoman' src={BudgetWoman} alt='Budget Woman'/>
            </div>
            <div id='loginWrapper'>
                <p>WELCOME TO</p>
                <p>Finara</p>
                <p>Sign up to take control of your financial future today.</p>
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    /><br></br>

                    <div id='locationSelectors'>
                        <CustomDropdown 
                            options={usStates}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <div style={{marginLeft: '1.5%'}}></div>
                        <CustomDropdown 
                            options={countries}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='mainBtn'>Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default LoginForm