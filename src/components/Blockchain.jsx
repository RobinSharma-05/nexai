import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import first from '../assets/images/webp/first.webp'
import second from '../assets/images/webp/second.webp'
import third from '../assets/images/webp/third.webp'
import fourth from '../assets/images/webp/fourth.webp'
import Slider from 'react-slick';
import ellipse_right from '../assets/images/webp/Ellipse_right.webp'
import ellipse_left from '../assets/images/webp/Ellipse_left.webp'
import circle_right from '../assets/images/webp/circle_right.webp'
import circle_left from '../assets/images/webp/circle_left.webp'

const Blockchain = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        cssEase: 'linear',
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        pauseonHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='position-relative'>
            <img className='position-absolute w-25 ellipse_forth d-none d-lg-block' src={ellipse_right} alt="" />
            <img className='position-absolute w-25 ellipse_fifth d-none d-lg-block' src={ellipse_left} alt="" />
            <img className='position-absolute circle_first d-none d-lg-block' src={circle_right} alt="" />
            <img className='position-absolute circle_second d-none d-lg-block' src={circle_left} alt="" />
            <Container className='px-3 px-md-5 pt-5'>
                <h4 className='ff-recharge fs-40 green_color d-flex justify-content-center mt-5'>Blockchain & AI technology</h4>
                <p className='ff-poppins fw-400 fs-16 text-whites mx-w-997 text-center d-flex mx-auto pb-5 pt-3'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <p className='ff-recharge fs-20 text-white d-flex mx-auto mx-w-690 text-center mt-5'>By building the software on blockchain, Nexai provides the following advantages</p>
            </Container>
            <Slider {...settings} className='pt-5'>
                <div>
                    <img className='w-100 pointer_cursor' src={first} alt="" />
                </div>
                <div>
                    <img className='w-100 py-5 my-5 pointer_cursor' src={second} alt="" />
                </div>
                <div>
                    <img className='w-100 pointer_cursor' src={third} alt="" />
                </div>
                <div>
                    <img className='w-100 py-5 my-5 pointer_cursor' src={fourth} alt="" />
                </div>
                <div>
                    <img className='w-100 pointer_cursor' src={first} alt="" />
                </div>
                <div>
                    <img className='w-100 py-5 my-5 pointer_cursor' src={second} alt="" />
                </div>
            </Slider>

        </div>
    )
}

export default Blockchain