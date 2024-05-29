import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navi = useNavigate();

    return (
        <div>
            <p style={{color: 'black'}}>Signup</p>
            <button onClick={ () => { navi('/') } }>Go to welcome</button>
        </div>
    )
}

export default Signup