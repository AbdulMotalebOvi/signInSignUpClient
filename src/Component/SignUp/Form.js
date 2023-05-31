import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import google from '../../assests/svg/google-fill.svg'
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-toastify';


const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setErrors] = useState()
    const navigate = useNavigate()
    const { googleSignIn, createUser, updateInfo } = useContext(AuthContext)
    const submit = (data) => {
        const name = data.firstName + data.lastName

        createUser(data.email, data.password)

            .then(result => {
                const user = result.user
                console.log(user);
                updateInfo(data.name)
                    .then(() => {
                        saveUserInDB(name, data.email)
                        toast.success('User Created Successfully')
                        navigate('/')
                        reset()


                    })

            })
            .catch(err => {
                const errorMessage = err.message;
                setErrors(errorMessage)
                console.log(errorMessage)
            })
    }
    const saveUserInDB = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);

            })

    }
    // google sign up
    const googleSignUp = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                navigate('/')
            }).catch(err => console.log(err))
    }


    return (
        <div>
            <div className="mt-5 lg:mt-0 flex justify-between items-center">
                <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-bold">Sign up</h2>
                    <p className="text-[15px]"> Let’s get you all set up so you can access your personal account.</p>
                </div>
                <button onClick={() => googleSignUp()} className="btn btn-outline border-[#8DD3BB] hover:border-none hover:bg-[#95f5d4]">
                    <img src={google} alt="" />
                </button>
            </div>
            <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                <div className="form-control space-y-4 mt-8">
                    {/* name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    {...register("firstName", { required: true })}
                                />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    First Name
                                </span>
                                {errors.firstName?.type === "required" && (
                                    <p className="text-red-400 font-semibold">First Name is required</p>
                                )}
                            </label>
                        </div>
                        <div>
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    {...register("lastName", { required: true })}
                                />
                                {errors.lastName?.type === "required" && (
                                    <p className="text-red-400 font-semibold">Last Name is required</p>
                                )}
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Last Name
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* email  */}
                    <div >
                        <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("email", { required: true })} />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                Email
                            </span>
                            {errors.email?.type === 'required' && <p className="text-red-600 font-semibold">Email is required</p>}
                        </label>
                    </div>
                    {/* password */}
                    <div>
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
                </div>
                <div className="space-y-5 my-10">
                    <Button type="submit" className="btn w-full bg-[#8DD3BB] text-black border-none my-3 hover:bg-[#7bffd1]" title="Create Account" />
                    <p className="text-sm my-5">Already have an account? <Link to="/signin" className="text-[#FF8682] font-semibold">Sign in</Link></p>
                </div>
            </form>

        </div>

    );
};

export default Form;