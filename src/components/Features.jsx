import React from 'react'
import { Timer, Timer_2, Chatbox, Lines } from './SvgIcon'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ellipse_right from '../assets/images/webp/Ellipse_right.webp'
import ellipse_left from '../assets/images/webp/Ellipse_left.webp'


const Features = () => {
    return (
        <div id='marketplace'>
            <div className='container_gif overflow_scroll overflow_X_scroll example earth_bg_img position-relative'>
                <img className='w-25 position-absolute second_ellipse d-none d-lg-block' src={ellipse_right} alt="" />
                <img className='w-25 position-absolute third_ellipse d-none d-lg-block' src={ellipse_left} alt="" />
                <Container className='pb-5 px-3 px-md-5'>
                    <h3 className='ff-recharge fs-40 d-flex justify-content-center text-white mt-5'>Unique features</h3>
                    <p className='ff-poppins fw-400 fs-16 text-whites d-flex mx-auto text-center mx-w-390 '>ability to engage in natural, fluent conversations in over 15 languages,</p>

                    <div className='unique_card mb-4 mt-5'>
                        <Link><Timer /></Link>
                        <h5 className='ff-recharge fs-20 text-black mx-w-350 mt-4 mb-3'>Remote Access and File Management</h5>
                        <p className='ff-poppins fw-400 fs-16 text_blackis'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <div className='unique_card mb-4'>
                            <Link><Timer_2 /></Link>
                            <h5 className='ff-recharge fs-20 text-black mx-w-350 mt-4 mb-3'>Real-time Home Monitoring</h5>
                            <p className='ff-poppins fw-400 fs-16 text_blackis'> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.  </p>
                        </div>
                    </div>

                    <div className='unique_card mb-4'>
                        <Link><Chatbox /></Link>
                        <h5 className='ff-recharge fs-20 text-black mx-w-350 mt-4 mb-3'>Autonomous and Natural Language Communication</h5>
                        <p className='ff-poppins fw-400 fs-16 text_blackis'> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend, </p>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <div className='unique_card'>
                            <Link><Lines /></Link>
                            <h5 className='ff-recharge fs-20 text-black mx-w-350 mt-4 mb-3'>Intelligent Contextual Awareness</h5>
                            <p className='ff-poppins fw-400 fs-16 text_blackis'> Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen.  </p>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Features