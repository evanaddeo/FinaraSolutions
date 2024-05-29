import React from 'react'
import { useNavigate } from 'react-router-dom'

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