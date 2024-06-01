import React from "react";
import BudgetWoman from '../assets/images/budgetwoman.jpg'

import '../styles/LoginForm.css'

function LoginForm() {
    return (
        <div id='formContainer'>
            <div style={{flex: .5}}>
                <img id='budgetWoman' src={BudgetWoman} />
            </div>
            <div id='loginWrapper'>
                <h5>WELCOME TO</h5>
                <h1>Finara</h1>
                <p>Sign up to take control of your financial future today.</p>
            </div>
        </div>
    )
}

export default LoginForm