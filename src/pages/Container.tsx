
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import { BiLinkExternal } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

const Container: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.user);
    const navigate =useNavigate()

    return (<>
            <SearchBox />
        <div className="bg-primary  ">
                {data?.items && data.items.length > 0 && (
            <h1 className="text-4xl font-bold text-center text-gray-600 px-5 pt-5  flex justify-items-start ">
                Profile
            </h1>
                )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  p-5 md:p-10">
                {data?.items && data.items.length > 0 && (
                    data.items.map((item) => (
                        <div key={item.id} className="bg-secondary shadow-lg rounded-lg p-6 flex items-center relative">
                            <button className=" absolute top-2 right-2 focus:outline-none " 
                            onClick={() =>navigate(`/${item.login}`) } title="Go to profile">
                                    <BiLinkExternal className="text-white" size={20} />
                             </button>
                            <img src={item.avatar_url} alt={item.login} className="w-20 h-20 rounded-full mr-4" />
                            <div>
                                <h2 className="text-sm text-white font-bold mb-2 w-40 overflow-hidden whitespace-nowrap md:w-full "
                                
                                >{item.login}</h2>
                                <a href={item.html_url} className="text-cyan-600 hover:text-cyan-400">
                                    Go to profile
                                </a>
                            </div>
                        </div>
                    ))
                ) }
                {data === undefined && (
                    <div className="text-2xl font-bold text-center text-gray-400 flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        No data available
                    </div>
                )}
                

                {data?.total_count === 0 && (
                    <div className="text-2xl font-bold text-center text-gray-400 flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                           Search for a user
                    </div>
                
                )}
            </div>
        </div>
    </>

    );
};

export default Container;
