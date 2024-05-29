import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FONTS } from '../constants/themes.js'

function Welcome() {
    const navi = useNavigate();

    return (
        <div>
            <p>Welcome</p>
            <button onClick={ () => { navi('/Login') } }>Go to login</button>
        </div>
    )
}

export default Welcome