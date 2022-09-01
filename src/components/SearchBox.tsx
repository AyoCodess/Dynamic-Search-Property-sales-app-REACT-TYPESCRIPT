import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  properties: any[];
  setProperties: React.Dispatch<React.SetStateAction<any[]>>;
  filteredSearchResults: any[];
  setFilteredSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  searchInputTerm: string;
  setSearchInputTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBox = ({
  properties,
  setFilteredSearchResults,
  searchInputTerm,
  setSearchInputTerm,
}: Props) => {
  const FilterPropertyByTerm = (term: string) => {
    setSearchInputTerm(term);

    if (searchInputTerm !== '') {
      const filteredProperties = properties.filter((property) =>
        property.short_description
          .split(' ')
          .join(' ')
          .toLowerCase()
          .includes(term.toLowerCase())
      );

      setFilteredSearchResults(filteredProperties);
    }

    if (searchInputTerm === '') {
      setFilteredSearchResults(properties);
    }
  };

  return (
    <div className='md:mx-auto w-[15rem] sm:w-[20rem]   mt-5 relative md:mr-14'>
      <input
        onChange={(e) => FilterPropertyByTerm(e.target.value.toLowerCase())}
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
