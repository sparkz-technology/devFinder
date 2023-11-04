import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import useSearch from '../hooks/useSearch';
import { useDispatch } from 'react-redux';
import { setData } from '../Slice';

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { mutate } = useSearch();
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length > 3) {
      mutate(newSearchTerm);
    }
  };

  return (
    <div className=' max-w-screen p-4 flex '>
      <div className='relative flex items-start justify-start'>
        <BiSearchAlt className='absolute top-2 left-3 text-2xl text-gray-400' />
        <input
          type="text"
          className='w-full h-10 pl-10 pr-16 rounded-xl border-gray-300 border-2 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-600 focus:ring-opacity-50 text-base text-gray-400 bg-gray-50 caret-current'
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="absolute top-0 right-0 text-white bg-indigo-500 border-1 p-2 focus:outline-none hover:bg-indigo-600 text-base rounded-e-xl"
          onClick={() => {
            setSearchTerm('');
            dispatch(setData(undefined));
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
