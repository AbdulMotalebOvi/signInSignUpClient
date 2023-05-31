import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4">
                    {
                        user?.photoURL ?
                            <img src={user?.photoURL} style={{ width: '50px', height: '50px', borderRadius: '25px' }} alt="" />
                            :
                            <UserCircleIcon className="h-10 w-10 text-orange-400" />
                    }
                </div>
                <div className="text-center">

                    <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>


                    <p className="text-black">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
