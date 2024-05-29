import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navi = useNavigate();

    return (
        <div>
            <p style={{color: 'black'}}>Login</p>
            <button onClick={ () => { navi('/Home') } }>Go to home</button>
        </div>
    )
}

export default Login