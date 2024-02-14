import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const HeroSection = () => {
    const [first, setfirst] = useState(true);
    return (
        <>
            <div className='bg_img mx-4 my-4 d-flex mx-auto my_container'>
                <Container className='pb-55 px-3 px-md-5'>
                    <div className="d-flex align-items-center justify-content-between py-4">
                        <div></div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div
                                className={
                                    first
                                        ? "top_m100 ps-0 mb-0 d-flex mobile_ul"
                                        : "top ps-0 mb-0 d-flex mobile_ul"
                                }
                            >
                                <a href='#home' className='ms-0 ms-lg-5 text-white mb-2 mb-lg-0 hover_line'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                >
                                    Home
                                </a>
                                <a href='#marketplace'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                    className="ms-0 ms-lg-4 text-white  mb-2 mb-lg-0 hover_line"
                                >
                                    Marketplace
                                </a>
                                <a href='#about'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                    className="ms-0 ms-lg-4 text-white  mb-3 mb-lg-0 hover_line"
                                >
                                    About
                                </a>
                                <a href='#nexchat'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                    className="ms-0 ms-lg-4 text-white  mb-3 mb-lg-0 hover_line"
                                >
                                    NexChat
                                </a>
                                <a href='#token'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                    className="ms-0 ms-lg-4 text-white  mb-3 mb-lg-0 hover_line"
                                >
                                    Tokens
                                </a>
                                <div className='ms-3 d-flex align-items-center gap-3 ms-0 d-lg-none'>
                                    <Link className='ff-recharge fw-700 butn butn__new' onClick={() => {
                                        setfirst(true);
                                    }}>Sign Up</Link>
                                </div>
                                <div className='d-lg-none d-block ms-3 set_position'
                                    onClick={() => {
                                        setfirst(true);
                                    }}
                                >
                                    <RxCross2 size={40} color='white' />
                                </div>
                            </div>
                        </div>
                        <div className='ms-3 ms-0 d-none d-lg-block d-flex'>
                            <Link className='butn butn__new ff-recharge fw-700'>Sign Up</Link>
                        </div>
                        <div
                            className="d-lg-none d-block"
                            onClick={() => {
                                setfirst(false);
                            }}
                        >
                            <div className="nav_icon"></div>
                            <div className="nav_icon"></div>
                            <div className="nav_icon"></div>
                        </div>
                    </div>
                    <Row className='mt-2'>
                        <Col lg={12} className='mt-0 mt-md-5'>
                            <h1 className='mt_90 ff-recharge fw-700 fs-60 text-white mx-w-590'><span className='green_color'>Nexai</span> is an advanced AI-powered home assistant</h1>
                            <p className='ff-poppins fw-400 text-whites mt-4'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                            <Link className='ff-recharge fw-700 fs-18 butn butn__new d-inline-block mt-5 mb_70'>Know More</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HeroSection