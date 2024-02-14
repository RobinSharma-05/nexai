import React from 'react'
import hand_image from '../assets/images/webp/section_2nd_image.webp'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ellipse_right from '../assets/images/webp/Ellipse_right.webp'

const PoveredHome = () => {
    return (
        <div id='home' className='position-relative'>
            <img className='w-25 position-absolute first_ellipse d-none d-lg-block' src={ellipse_right} alt="" />
            <Container className='px-3 px-md-5'>
                <Row className='align-items-center justify-content-between py-5'>
                    <Col lg={6}>
                        <img className='w-75' src={hand_image} alt="" />
                    </Col>
                    <Col lg={6} className='py-5'>
                        <div>
                            <h2 className='ff-recharge fw-700 fs-40 green_color'>Ai-Powered Home Assistant</h2>
                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-520 my-3'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural,
                                fluent conversations in over 15 languages,
                                Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide
                                timely reminders
                                assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.
                            </p>
                            <Link className='ff-recharge fw-700 fs-18 butn butn__new d-inline-block mt-4'>Learn More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PoveredHome