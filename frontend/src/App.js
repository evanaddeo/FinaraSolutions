import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Welcome /> } />
                <Route path='/Home' element={ <Home /> } />
                <Route path='Login' element={ <Login /> } />
                <Route path='Signup' element={ <Signup /> } />
            </Routes>
        </Router>
    )
}

export default App
