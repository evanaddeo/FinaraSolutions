import React from 'react'
import Header from '../components/Header'

function Investing() {
    return (
        <div>
            <Header signedIn={true} selectedBtnId='invest' />
            <p>Investing</p>
        </div>
    )
}

export default Investing;