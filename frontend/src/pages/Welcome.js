import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

import { FONTS } from '../constants/themes.js'

function Welcome() {
    const navi = useNavigate();

    return (
        <div>
            <Header />
            <p>Welcome</p>
            <button onClick={ () => { navi('/Login') } }>Go to login</button>
        </div>
    )
}

export default Welcome