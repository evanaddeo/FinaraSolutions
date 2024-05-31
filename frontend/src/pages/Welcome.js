import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navi = useNavigate();

    return (
        <div className='container'>
            <Header />
            <p>Welcome</p>
            <button onClick={ () => { navi('/Login') } }>Go to login</button>
        </div>
    )
}

export default Welcome