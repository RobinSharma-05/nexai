import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AI from '../assets/images/webp/AI.webp'

const Ai_bg_gif = () => {
    return (
        <div className='container_gif mt-5' id='nexchat'>
            <div className='bg_gif min-vh-10'>
                <Container className='px-3 px-md-5'>
                    <Row className='align-items-center pt-5 pb-5'>
                        <Col lg={6} className='mt-5'>
                            <h6 className='ff-recharge fs-40 green_color'>What is NexAi?</h6>
                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-560 mt-3'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-560 mb-5'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                            <Link className='ff-recharge butn butn__new fs-18'>Learn More</Link>
                        </Col>
                        <Col lg={6} className='pt-5'>
                            <img className='w-100' src={AI} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Ai_bg_gif