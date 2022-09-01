import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  properties: any[];
  setProperties: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchBox = ({ properties, setProperties }: Props) => {
  const FilterPropertyByTerm = (term: string) => {
    console.log('filtering properties by term:', term);
    console.log('properties:', properties);
  };
  return (
    <div className='md:mx-auto w-[25rem]  mt-5 relative md:mr-14'>
      <input
        onChange={(e) => FilterPropertyByTerm(e.target.value)}
        placeholder='Enter a search term'
        className='px-5 py-3 border-gray-400 border rounded w-full'
      />

      <FaSearch
        className='absolute top-3.5 right-3.5 text-gray-400'
        size={20}
      />
    </div>
  );
};
