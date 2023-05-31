import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-toastify';

const SimpleNav = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const signOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign Out successfull')
                navigate('/')
            })
            .catch(() => { })
    }
    return (
        <div>
            <ul className='flex flex-wrap items-center justify-center my-2 space-x-4'>
                <li>
                    <Link
                        to='/'
                        className='text-[16px] bg-orange-100 rounded-xl  py-2 px-4 mt-5'
                    >
                        Home
                    </Link>
                </li>
                {user?.email ? (
                    <>
                        {user?.photoURL ? (
                            <li className='flex justify-center items-center space-x-2'>
                                <Link to='/profile'>
                                    <img
                                        src={user?.photoURL}
                                        style={{ width: '40px', height: '40px', borderRadius: '20px' }}
                                        alt=''
                                    />
                                </Link>
                                <Link
                                    onClick={() => signOut()}
                                    className='btn-outline bg-[#8DD3BB] px-4 py-2 text-white rounded-sm hover:border-none hover:bg-[#95f5d4]'
                                >
                                    Sign Out
                                </Link>
                            </li>
                        ) : (
                            <li className='flex justify-center items-center space-x-2'>
                                <Link to='/Profile'>
                                    <UserCircleIcon className='h-10 w-10 text-orange-400' />
                                </Link>
                                <Link
                                    onClick={() => signOut()}
                                    className='btn-outline bg-[#8DD3BB] px-4 py-2 text-white rounded-sm hover:border-none hover:bg-[#95f5d4]'
                                >
                                    Sign Out
                                </Link>
                            </li>
                        )}
                    </>
                ) : (
                    <li>
                        <Link
                            to='/signIn'
                            className='text-[16px] bg-orange-100 rounded-xl  py-2 px-4 mt-5'
                        >
                            Sign In
                        </Link>
                    </li>
                )}
            </ul>
        </div>

    );
};

export default SimpleNav;