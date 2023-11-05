// Profile.tsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetUserAndRepos from '../hooks/useGetUserAndRepos';
import {
  FiUsers,
  FiList,
  FiCalendar,
  FiClock,
  FiUser,
  FiLink,
} from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';

const Profile: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetUserAndRepos(id || '');
  const navigate =useNavigate()
  return (
    <div className="bg-primary  text-white pb-20  sm:p-7 sm:pb-20 md:p-20 relative">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow  md:absolute ml-5 m-0
        md:top-5 md:left-5" onClick={() =>navigate(`/`)} title="Go back
        ">
            Go back
        </button>
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className=" loader "></div>
        </div>
      )}

      {isError && (
        <div className="text-red-500 text-center">{error?.message}</div>
      )}

      <div className="bg-primary shadow-lg rounded-lg p-5 max-w-4xl mx-auto md:bg-secondary">
        {data && (
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 pr-8">
            <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiUser className="mr-2" />
                <span className="font-semibold text-green-500">Username:</span>{' '}
                {data.login}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiUsers className="mr-2" />
                <span className="font-semibold text-green-500">Followers:</span>{' '}
                {data.followers}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiUsers className="mr-2" />
                <span className="font-semibold text-green-500">Following:</span>{' '}
                {data.following}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiList className="mr-2" />
                <span className="font-semibold text-green-500">Public Repos:</span>{' '}
                {data.public_repos}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiCalendar className="mr-2" />
                <span className="font-semibold text-green-500">Joined:</span>{' '}
                {new Date(data.created_at).toDateString()}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiClock className="mr-2" />
                <span className="font-semibold text-green-500">Last updated:</span>{' '}
                {new Date(data.updated_at).toDateString()}
              </p>
              <p className="flex items-center text-lg text-gray-300 mb-2">
                <FaLocationArrow className="mr-2" />
                <span className="font-semibold text-green-500">Location:</span>{' '}
                {data.location}
                </p>
                
                <p className="flex items-center text-lg text-gray-300 mb-2">
                <FiLink className="mr-2" /> {/* Replaced the FiClock with FiLink */}
                <span className="font-semibold text-green-500">Blog:</span>{' '} 
                <a href={data.blog} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                {data.blog}
                </a>
                </p>

            </div>
            <div className="w-full md:w-1/2 pl-8">
              <img
                src={data.avatar_url}
                alt={data.login}
                className="w-48 h-48 rounded-full mb-4 mx-auto md:mx-0"
              />
              <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
              <p className="text-lg text-gray-300 mb-4">{data.bio}</p>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                >
                    Visit Github Profile
                </a>

              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
