import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import GooglePlay from '../assets/images/GooglePlayLogo.png'
import Apple from '../assets/images/AppleLogo.png'
import DotGraphic from '../assets/images/DotGraphic.png'
import iPhone from '../assets/images/iPhoneStock.png'
import WelcomeImg from '../assets/images/WelcomeImg.jpg'
import WhiteMoney from '../assets/images/WhiteMoney.png'

import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { useNavigate } from 'react-router-dom'
import { FONTS, SIZES, COLORS } from '../assets/constants/themes'

import '../styles/Welcome.css'

function Welcome() {
    const navi = useNavigate();

    const [dashIconColor, setDashIconColor] = useState(COLORS.blue1);
    const [metricIconColor, setMetricIconColor] = useState('gray');
    const [aiIconColor, setAiIconColor] = useState('gray');
    const [featSelected, setFeatSelected] = useState('dash')

    // clicked == dash, metric, or ai
    const updateFtButton = (clicked) => {

        const currentFeat = document.getElementById(featSelected);
        const clickedFeat = document.getElementById(clicked);

        if (clicked === 'dash') {
            setDashIconColor(COLORS.blue1);
            setMetricIconColor('gray');
            setAiIconColor('gray');

        } else if (clicked === 'metric') {
            setDashIconColor('gray');
            setMetricIconColor(COLORS.blue1);
            setAiIconColor('gray');

        } else {    // Clicked == ai
            setDashIconColor('gray');
            setMetricIconColor('gray');
            setAiIconColor(COLORS.blue1);
        }

        currentFeat.classList.remove('clickedBtn')
        clickedFeat.classList.add('clickedBtn')
        setFeatSelected(clicked)
    };

    return (
        <div className='container' style={{overflowY: 'scroll'}}>
            <Header signedIn={false} selectedBtnId='home'/>


            {/* Intro Hero Section*/}
            <div className='sectionContainer'>

                <div className='subsection' style={{alignItems: 'flex-start'}}>
                    <p style={{fontSize: SIZES.xxxlarge, fontFamily: FONTS.Title, color: COLORS.black, margin: '0px'}}>
                        The Modern <br></br>Budgeting Solution <br></br>With <span style={{color: COLORS.blue1}}>Finara</span>
                    </p>
                    <p className='secondaryTxt' style={{fontSize: '1rem'}}>
                        Record every transaction in seconds, analyze spend metrics, <br></br>
                        and review categorized spending history to achieve all of your <br></br>
                        financial goals and build a better future.
                    </p>
                    <button 
                        className='actionBtn' 
                        style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small, marginTop: '3%'}}
                        onClick={() => { navi('/Test-API')}}>
                        {/* onClick={() => { navi('/Signup')}}> */}
                        Test API
                        {/* Get Started */}
                    </button>
                </div>

                <div className='subsection' style={{marginRight: '-6vw'}}>

                    <div id='infoContainer'>
                        <img id='welcomeDots' src={DotGraphic} alt='Dot Graphic' />

                        <div id='infoBlock'>
                            <div style={{flex: 1, display: 'flex'}}>

                                <div style={{display: 'flex', flex: 1, backgroundColor: COLORS.blue1}}>
                                    <img id='whiteMoney' style={{flex: 1}} src={WhiteMoney} alt='white money' />
                                </div>

                                <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>

                                    <div className='statBox' style={{backgroundColor: COLORS.blue2}}>
                                        <p className='offer' style={{textAlign: 'left'}}>
                                            <span className='quant' style={{ fontFamily: FONTS.Title}}>
                                                100%
                                            </span>
                                            <br />Customizable
                                        </p>
                                    </div>
                                    <div className='statBox' style={{backgroundColor: COLORS.blue3}}>
                                        <p className='offer' style={{textAlign: 'left'}}>
                                            <span className='quant' style={{ fontFamily: FONTS.Title}}>
                                                12
                                            </span>
                                            <br />Free Templates
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <img style={{flex: 1}} src={WelcomeImg} alt='Welcome Img'/>
                        </div>
                    </div>

                </div>
            </div>


            {/* Product Features Section*/}
            <div className='sectionContainer'>
                <div className='subsection' style={{alignItems: 'flex-start'}}>

                    <p style={{fontSize: SIZES.xxlarge, fontFamily: FONTS.Title, color: COLORS.black, margin: '0px'}}>Product Features</p>
                    <p className='secondaryTxt' style={{margin: '2% 0% 8% 0%'}}>
                        Customize your budget plan, analyze spend metrics, and get a snapshot of your financial status from your Desktop or mobile device.
                    </p>

                    <button 
                        className='featBtn clickedBtn'
                        onClick={
                            () => { updateFtButton('dash') }}
                        id='dash'
                    >
                        <DashboardIcon sx={{width: '1.3vw', color: dashIconColor, margin: '0% 6% 0% 4%'}} className='hdrIcon'/>
                        <div className='featBtnInfo'>
                            <p style={{margin: '0px', fontWeight: 'bold'}}>Dashboard</p>
                            <p className='secondaryTxt' style={{margin: '2% 0% 0% 0%', fontSize: '.9rem'}}>
                                Get a glimpse into your aggregate spending trends, budget alignment, and various insightful statistics.
                            </p>
                        </div>
                    </button>

                    <button 
                        className='featBtn'
                        onClick={
                            () => { updateFtButton('metric') }}
                        id='metric'
                    >
                        <EqualizerIcon sx={{width: '1.3vw', color: metricIconColor, margin: '0% 6% 0% 4%'}} className='hdrIcon'/>
                        <div className='featBtnInfo'>
                            <p style={{margin: '0px', fontWeight: 'bold'}}>Advanced Metrics</p>
                            <p className='secondaryTxt' style={{margin: '2% 0% 0% 0%', fontSize: '.9rem'}}>
                                Analyze trends, distributions, and key metrics providing a comprehensive spending overview.
                            </p>
                        </div>
                    </button>

                    <button 
                        className='featBtn'
                        onClick={
                            () => { updateFtButton('ai') }}
                        id='ai'
                    >
                        <AutoAwesomeIcon sx={{width: '1.3vw', color: aiIconColor, margin: '0% 6% 0% 4%'}} className='hdrIcon'/>
                        <div className='featBtnInfo'>
                            <p style={{margin: '0px', fontWeight: 'bold'}}>AI Tools</p>
                            <p className='secondaryTxt' style={{margin: '2% 0% 0% 0%', fontSize: '.9rem'}}>
                                Utilize AI-generated templates and strategies personalized to your habits and needs.
                            </p>
                        </div>
                    </button>

                </div>
                <div className='subsection'>
                    <div id='featDisplay'>
                        <p>img </p>
                    </div>
                </div>
            </div>
            

            {/* Mobile App Section*/}
            <div className='sectionContainer'>

                <img src={iPhone} alt='iPhone' className='subsection'/>

                <div className='subsection' style={{alignItems: 'flex-end', textAlign: 'right', margin: '-8vh 7vw 0vw 0vw'}}>
                    <p style={{fontSize: SIZES.xxlarge, fontFamily: FONTS.Title, color: COLORS.black, margin: '0% 0%'}}>The Best App to Support Your <br></br>Financial Future</p>
                    <p className='secondaryTxt' style={{margin: '3% 0% 9% 0%'}}>
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

                    <p style={{fontSize: SIZES.xxxlarge, fontFamily: FONTS.Title, color: COLORS.black, margin: '0px'}}>Let's Spend <span style={{color: COLORS.blue1}}>Smart</span>.</p>
                    <p className='secondaryTxt' style={{margin: '1.5% 0% 3% 0%'}}>Explore our cutting-edge financial health services, delivering high-quality solutions tailored to your needs. <br></br>Elevate your experience with top-tier features from Finara.</p>

                    <div className='signupBottom'>
                        <input 
                            id='inputty'
                            placeholder='Email Address'
                            /* value={email} */
                            /* onChange={(e) => setEmail(e.target.value)} */
                        />
                        <button 
                            className='actionBtn' 
                            style={ {fontFamily: FONTS.Regular, fontSize: SIZES.small}}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Welcome