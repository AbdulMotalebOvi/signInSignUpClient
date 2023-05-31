import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-screen-xl">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 space-x-4 bg-orange-200 rounded-3xl p-8 sm:p-24">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back!
                        </h1>

                        <p className="mt-1.5 text-sm text-gray-500">
                            Let's go and deep drive! 🎉
                        </p>
                    </div>
                    <Link to='/question'>
                        <Button title='View Website' />
                    </Link>
                </div>
            </div>
        </header>

    );
};

export default Home;