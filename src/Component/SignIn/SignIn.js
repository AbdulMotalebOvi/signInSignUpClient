import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../../assests/images/Rectangle 20.png'
import img2 from '../../assests/images/re2.png'
import google from '../../assests/svg/google-fill.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-toastify';

const SignIn = () => {
    const { googleSignIn, signIn, logOut
    } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // swiper
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const submit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('Sign In successfully')
                navigate('/')
                reset()
            })
            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage)
                console.log(errorMessage)
            })
    }
    const googleSignin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(result);
                toast('Sign in successful')
                navigate('/')
            }).catch(err => console.log(err))
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
            <div className="mt-[10%]">
                <div className="md:mt-[60px] space-y-2 flex justify-between items-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Sign In</h2>
                        <p>Sign In to access your account</p>
                    </div>
                    <button onClick={() => googleSignin()} className="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]">
                        <img src={google} alt="" />
                    </button>
                </div>
                <form onSubmit={handleSubmit(submit)} className="space-y-5">
                    <div className="form-control mt-[48px] space-y-5">
                        <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("email", { required: true })} />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                Email
                            </span>
                            {errors.email?.type === 'required' && <p className="text-red-600 font-semibold">Email is required</p>}
                        </label>
                        <label htmlFor="password" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input type="password" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("password", {
                                required: true,
                                minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                            })} />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                Password
                            </span>
                            <p className="text-red-600 font-semibold">{error}</p>
                            {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                        </label>
                    </div>
                    <Button type="submit" title="Sign in" />
                    <p className="text-[16px] mt-3 my-5">
                        No account? <span><Link to="/signup" className="text-[#FF8682] font-bold">Sign Up</Link></span>
                    </p>
                </form>
            </div>
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
        </div>


    );
};

export default SignIn;