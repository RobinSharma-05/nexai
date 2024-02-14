import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

const Sliders = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseonHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    var settings_2 = {
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        pauseonHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <Container>
                <h5 className='ff-recharge fs-40 green_color d-flex justify-content-center'>NexAi does all this. And more.</h5>
                <p className='ff-poppins fw-400 fs-16 mx-w-935 text-center text-whites d-flex mx-auto mt-3'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            </Container>
            <Slider {...settings} className='pt-5'>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on light
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, measure this table
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on music
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
            </Slider>
            <Slider {...settings_2} className='pt-5'>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on light
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, measure this table
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on music
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
            </Slider>
            <Slider {...settings} className='py-5'>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on light
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, measure this table
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, Turn on music
                    </h6>
                </div>
                <div className='slider_box'>
                    <h6 className='slider_text ff-recharge fs-24 text-white text-center'>
                        NexAi, set<br></br>
                        alarm of 5:00 am
                    </h6>
                </div>
            </Slider>
        </div>
    )
}

export default Sliders