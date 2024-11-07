import React from 'react'
import Header from '../components/Header'

function Budget() {
    return (
        <div>
            <Header signedIn={true} selectedBtnId='budget' />
            <p>Budget</p>
        </div>
    )
}

export default Budget;