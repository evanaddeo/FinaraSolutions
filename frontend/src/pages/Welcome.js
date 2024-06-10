import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GooglePlay from '../assets/images/GooglePlayLogo.png'
import Apple from '../assets/images/AppleLogo.png'
import { useNavigate } from 'react-router-dom'
import { FONTS, SIZES, COLORS } from '../constants/themes'

import '../styles/Welcome.css'

function Welcome() {
    const navi = useNavigate();

    return (
        <div className='container' style={{overflow: 'scroll'}}>
            <Header signedIn={false}/>
            <p>Welcome</p>

            <button onClick={ () => { navi('/Login') } }>Go to login</button>
            <button onClick={ () => { navi('/Signup') } }>Go to signup</button>

            <p>Hello</p>
            <p>Hello</p>

            {/* Intro Hero Section*/}
            <div className='sectionContainer'>

                <div className='subsection' style={{alignItems: 'flex-start'}}>
                    <p style={{fontSize: SIZES.xxxlarge, fontFamily: FONTS.Title, color: COLORS.black}}>
                        The Modern <br></br>Budgeting Solution <br></br>with <span style={{color: COLORS.blue1}}>Finara</span>
                    </p>
                    <p className='secondaryTxt'>
                        Record every transaction in seconds, analyze spend metrics, <br></br>
                        and review categorized spending history to achieve all of your <br></br>
                        financial goals and build a better future.
                    </p>
                    <button 
                        className='actionBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}
                        onClick={() => { navi('/Signup')}}>
                        Get Started
                    </button>
                </div>

                <div className='subsection'>
                    <p>Photo & info</p>
                </div>
            </div>

            {/* Product Features Section*/}
            <div className='sectionContainer'>
                <div className='subsection' style={{alignItems: 'flex-start'}}>
                    <p style={{fontSize: SIZES.xxlarge, fontFamily: FONTS.Title, color: COLORS.black}}>Product Features</p>
                    <p className='secondaryTxt'>
                        Customize your budget plan, analyze spend metrics, and get a snapshot of your financial status from your Desktop or mobile device.
                    </p>
                    <p>Dashboard</p>
                    <p>Advanced Metrics</p>
                    <p>Budget Tools</p>
                </div>
                <div className='subsection'>
                    <p>Graphic on selected Ft</p>
                </div>
            </div>

            {/* Mobile App Section*/}
            <div className='sectionContainer'>

                <div className='subsection'>
                    <p>large phone</p>
                </div>

                <div className='subsection' style={{alignItems: 'flex-end', textAlign: 'right'}}>
                    <p style={{fontSize: SIZES.xxlarge, fontFamily: FONTS.Title, color: COLORS.black}}>The Best App to Support Your <br></br>Financial Future</p>
                    <p className='secondaryTxt'>
                        Don't let your on-the-go lifestyle get in the way of your budgeting <br></br>
                        goals. Add & edit expenses anywhere, anytime. 
                    </p>

                    <div className='subsectionRow'>

                        <button className='mobileDownload' style={{marginRight: '.5vw'}}>
                            <div className='mobileContent'>
                                <img className='mobileLogo' src={Apple} style={{width: '17px', marginTop: '-2px'}}alt='Apple Logo' />

                                <div className='mobileSpecifics'>
                                    <p className='txt' style={{fontSize: '.5rem'}}>Get on the</p>
                                    <p className='txt' style={{fontSize: '.8rem'}}>App Store</p>
                                </div>
                            </div>
                        </button>

                        <button className='mobileDownload'>
                            <div className='mobileContent'>
                                <img className='mobileLogo' src={GooglePlay} alt='Play Logo' />

                                <div className='mobileSpecifics'>
                                    <p className='txt' style={{fontSize: '.5rem'}}>Get on the</p>
                                    <p className='txt' style={{fontSize: '.8rem'}}>Play Store</p>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>              
            </div>

            {/* Get Started Section*/}
            <div className='sectionContainer'>
                <div className='subsection' style={{textAlign: 'center'}}>
                    <p style={{fontSize: SIZES.xxlarge, fontFamily: FONTS.Title, color: COLORS.black}}>Let's Spend <span style={{color: COLORS.blue1}}>Smart</span>.</p>
                    <p className='secondaryTxt'>Explore our cutting-edge financial health services, delivering high-quality solutions tailored to your needs. <br></br>Elevate your experience with top-tier features from Finara.</p>
                    <div className='subsectionRow'>
                        <p>Email entry btn</p>
                        <p>____submit btn</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Welcome