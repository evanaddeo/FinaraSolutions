import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navi = useNavigate();

    return (
        <div>
            <p style={{color: 'black'}}>Home</p>
            <button onClick={ () => { navi('/Signup') } }>Go to Signup</button>
        </div>
    )
}

export default Home