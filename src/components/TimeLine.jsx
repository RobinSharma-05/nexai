import React from 'react'
import timeline_img from '../assets/images/webp/timeline_section_img.webp'
import { Col, Container, Row } from 'react-bootstrap'
import circle_right from '../assets/images/webp/circle_right.webp'
import ellipse_left from '../assets/images/webp/Ellipse_left.webp'
import ellipse_right from '../assets/images/webp/Ellipse_right.webp'

const TimeLine = () => {
    return (
        <div id='token' className='position-relative'>
            <img className='position-absolute circle_third d-none d-lg-block' src={circle_right} alt="" />
            <img className='position-absolute w-25 ellipse_sixth d-none d-lg-block' src={ellipse_left} alt="" />
            <img className='position-absolute w-25 ellipse_seventh d-none d-lg-block' src={ellipse_right} alt="" />
            <Container className='px-3 px-md-5 mb-5 py-5'>
                <h2 className='ff-recharge fs-40 green_color d-flex align-items-center justify-content-center mt-5'>NexAI Token & utility</h2>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={6}>
                        <img className='w-75' src={timeline_img} alt="" />
                    </Col>
                    <Col lg={6} className='mt-5'>
                        <div className='overflow_scroll example'>
                            <div class="container p-relative">
                                <div class="timeline">

                                    <div class="containerr right-container">
                                        <div class="circle-2"></div>
                                        <div class="text-box">
                                            <h2 className='ff-recharge fs-24 text-white'>Purchasing Nexai Products</h2>
                                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of
                                                software solutions, hardware devices, including drones and sensors, and other smart
                                                home products available on the Nexai marketplace. Users can confidently make purchases
                                                using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                                        </div>
                                    </div>

                                    <div class="containerr right-container mt-5">
                                        <div class="circle-2"></div>
                                        <div class="text-box">
                                            <h2 className='ff-recharge fs-24 text-white'>Accessing Exclusive Content</h2>
                                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>By holding Nex AI tokens, users will gain privileged access to exclusive
                                                content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized
                                                services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.</p>
                                        </div>
                                    </div>

                                    <div class="containerr right-container mt-5">
                                        <div class="circle-2"></div>
                                        <div class="text-box">
                                            <h2 className='ff-recharge fs-24 text-white'>Loyalty and Rewards</h2>
                                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>The Nexai ecosystem will feature a robust loyalty program, rewarding users
                                                with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services.
                                                Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers,
                                                fostering a strong sense of loyalty and encouraging continued involvement.</p>
                                        </div>
                                    </div>

                                    <div class="containerr right-container mt-5">
                                        <div class="circle-2"></div>
                                        <div class="text-box">
                                            <h2 className='ff-recharge fs-24 text-white'>Participating in Governance</h2>
                                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms,
                                                token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements,
                                                and actively contribute to shaping the future development and direction of the Nexai ecosystem.</p>
                                        </div>
                                    </div>

                                    <div class="containerr right-container mt-5">
                                        <div class="circle-2"></div>
                                        <div class="text-box">
                                            <h2 className='ff-recharge fs-24 text-white'>Peer-to-Peer Transactions</h2>
                                            <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>Nex AI tokens will enable seamless peer-to-peer transactions within
                                                the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned
                                                Nexai devices, engaging in token trading activities, or conducting value exchanges
                                                directly within the ecosystem, all with the utmost security and convenience.</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="containerr right-container mt-5">
                                    <div class="circle-2"></div>
                                    <div class="text-box mb-35">
                                        <h2 className='ff-recharge fs-24 text-white'>Token Staking and Rewards</h2>
                                        <p className='ff-poppins fw-400 fs-16 text-whites mx-w-535'>Nex AI tokens will support staking mechanisms, allowing users to lock up
                                            their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives,
                                            further incentivizing token holding and fostering long-term engagement and loyalty.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TimeLine