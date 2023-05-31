import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Question = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-screen-xl">
                <div className="bg-orange-200 rounded-3xl p-8 sm:p-12 lg:p-24">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Do you have an account?
                        </h1>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 items-center justify-center my-5">
                            <Link to="/signin">
                                <Button title="Yes" />
                            </Link>
                            <Link to="/signup">
                                <Button title="No" />
                            </Link>
                        </div>
                        <Link to="/" className="font-semibold text-sm underline text-blue-400">
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Question;