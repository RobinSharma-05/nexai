import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Telegram, Twitter } from './SvgIcon'
import { Link } from 'react-router-dom'

const FooterSection = () => {
    return (
        <div>
            <Container className='px-3 px-md-5 bg_footer_img'>
                <Row className='align-items-center mb-3'>
                    <Col lg={6} className='mb-4'>
                        <p className='ff-recharge fs-16 text-whites mx-w-350 mb-4'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                        <div className='d-flex gap-2'>
                            <Link><Facebook /></Link>
                            <Link><Twitter /></Link>
                            <Link><Telegram /></Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='d-flex justify-content-between mt-5 mt-lg-0'>
                            <ul className='ps-0 ps-lg-5'>
                                <li className='ff-recharge fs-18 text-white'>Quick links</li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>Home</Link></li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>Features</Link></li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>Marketplace</Link></li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>Tokens</Link></li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>NexChat</Link></li>
                                <li className='ff-recharge fs-16 mt-3'><Link className='text-whites'>About</Link></li>
                            </ul>
                            <ul className='pe-0 pe-md-5 ps-0'>
                                <li className='ff-recharge fs-18 text-white'>Information's</li>
                                <li className='ff-recharge fs-18 mt-3'><Link className='text-whites'>Contact</Link></li>
                                <li className='ff-recharge fs-18 mt-3'><Link className='text-whites'>Phone</Link></li>
                                <li className='ff-recharge fs-18 mt-3'><Link className='text-whites'>terms</Link></li>
                                <li className='ff-recharge fs-18 mt-3'><Link className='text-whites'>Privacy</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <h4 className='footer_line mb-4'></h4>
                <Link className='ff-recharge fs-16 text-whites d-flex align-items-center justify-content-center mb-0 pb-4'>@Copyright.nexai</Link>
            </Container>
        </div>
    )
}

export default FooterSection