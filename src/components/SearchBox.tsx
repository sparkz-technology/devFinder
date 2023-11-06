// import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import useSearch from '../hooks/useSearch';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setSearchTerms } from '../Slice';
import { RootState } from '../Store';

const SearchBox: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const searchTerms = useSelector((state: RootState) => state.user.searchTerms);
  const { mutate ,status} = useSearch();
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    // setSearchTerm(newSearchTerm);
    dispatch(setSearchTerms(newSearchTerm));
    if (newSearchTerm.length > 3) {
      mutate(newSearchTerm);
    }
  };

  // useEffect(() => {
  //   if(data){
  //     searchTerm.length === 0 && dispatch(setData(undefined));
  //   }
  // }, [searchTerm, dispatch,data]);
  if(status === 'error'){
    return <div className='text-white'>Something went wrong</div>
  }


  return (
    <>
    <div className='max-w-screen p-4 flex text-white'>
      <div className='relative flex items-start justify-start'>
        <BiSearchAlt className='absolute top-2 left-3 text-2xl text-gray-400' />
        <input
          type="text"
          className='w-full h-10 pl-10 pr-16 rounded-xl border-gray-600 border-2 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-600 focus:ring-opacity-50 text-base text-white bg-transparent caret-current'
          placeholder="Search"
          value={searchTerms}
          onChange={handleSearch}
        />
      { status === "success" &&
       <button
          className="absolute top-0 right-0 text-gray-400 bg-transparent border-1 p-2 focus:outline-none text-base rounded-e-xl"
          onClick={() => {
            dispatch(setSearchTerms(''));
            dispatch(setData({}))
          }}
        >
          Clear
        </button>}
        
        {status === 'pending' && <Loading />}
      </div>
      
          
    </div>
      
        </>
  );
};

export default SearchBox;


const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center  absolute top-1.5 right-1.5 ">
      <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-cyan-500"></div>
    </div>)
}
