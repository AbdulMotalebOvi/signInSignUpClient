import React, { useRef } from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assests/images/Rectangle 20.png'
import img2 from '../../assests/images/re2.png'
import Form from './Form';
import { Link } from 'react-router-dom';


const SignUp = () => {


    // watch input value by passing the name of it
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-20'>
                <div className='w-full md:w-[550px] h-[500px] md:h-[700px]'>
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt="" className="w-full h-full object-cover" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" className="w-full h-full object-cover" /></SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
                <Form></Form>


            </div>
        </div>


    );
};

export default SignUp;