import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Metrics from './pages/Metrics'
import Investing from './pages/Investing'
import Budget from './pages/Budget'
import ForgotPwd from './pages/ForgotPwd'
import PwdConfirmation from './pages/PwdConfirmation'

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Welcome /> } />
                <Route path='Home' element={ <Home /> } />
                <Route path='Login' element={ <Login /> } />
                <Route path='Signup' element={ <Signup /> } />
                <Route path='Metrics' element={ <Metrics/> } />
                <Route path='Budget' element={ <Budget/> } />
                <Route path='Investing' element={ <Investing/> } />
                <Route path='Forgot-Password' element={ <ForgotPwd/> } />
                <Route path='Confirm-Password' element={ <PwdConfirmation/> } />
            </Routes>
        </Router>
    )
}

export default App
