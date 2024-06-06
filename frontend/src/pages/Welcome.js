import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { SIZES } from '../constants/themes'

function Welcome() {
    const navi = useNavigate();

    return (
        <div className='container'>
            <Header signedIn={true}/>
            <p>Welcome</p>

            <button onClick={ () => { navi('/Login') } }>Go to login</button>
            <button onClick={ () => { navi('/Signup') } }>Go to signup</button>

            <p style={{fontSize: SIZES.xxsmall}}>xxsmall</p>
            <p style={{fontSize: SIZES.xsmall}}>xsmall</p>
            <p style={{fontSize: SIZES.small}}>small</p>
            <p style={{fontSize: SIZES.medium}}>medium</p>
            <p style={{fontSize: SIZES.large}}>large</p>
            <p style={{fontSize: SIZES.xlarge}}>xlarge</p>
            <p style={{fontSize: SIZES.xxlarge}}>xxlarge</p>
        </div>
    )
}

export default Welcome