// Profile.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

const Profile: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.user);

    return (
        <div className="bg-secondary  p-7">
            <h1 className="text-4xl font-bold text-center text-gray-600 mb-8  flex justify-items-start ">
                Profile
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data?.items && data.items.length > 0 ? (
                    data.items.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 flex items-center">
                            <img src={item.avatar_url} alt={item.login} className="w-20 h-20 rounded-full mr-4" />
                            <div>
                                <h2 className="text-xl font-bold mb-2">{item.login}</h2>
                                <a href={item.html_url} className="text-cyan-600 hover:text-cyan-400">
                                    Go to profile
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-2xl font-bold text-center text-gray-400 flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        No data available
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
