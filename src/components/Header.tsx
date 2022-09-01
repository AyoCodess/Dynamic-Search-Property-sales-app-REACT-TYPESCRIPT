import React from 'react';
import { SearchBox } from '.';

interface Props {
  properties: any[];
  setProperties: React.Dispatch<React.SetStateAction<any[]>>;
  filteredSearchResults: any[];
  setFilteredSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  searchInputTerm: string;
  setSearchInputTerm: React.Dispatch<React.SetStateAction<string>>;
  savedProperties: any[];
}

export const Header = ({
  properties,
  setProperties,
  filteredSearchResults,
  setFilteredSearchResults,
  searchInputTerm,
  setSearchInputTerm,
  savedProperties,
}: Props) => {
  return (
    <header className='flex flex-col md:flex-row justify-between ml-6 mx-auto '>
      <div className='flex flex-col'>
        <h1 className='text-6xl sm:text-8xl'>Posh Properties</h1>
        <div className='flex items-center  gap-2 p-2 shadow bg-gray-100 w-44 h-10 mt-5'>
          <p className='italic font-medium'>Saved Properties</p>
          <span>{savedProperties.length}</span>
        </div>
      </div>

      <SearchBox
        properties={properties}
        setProperties={setProperties}
        filteredSearchResults={filteredSearchResults}
        setFilteredSearchResults={setFilteredSearchResults}
        searchInputTerm={searchInputTerm}
        setSearchInputTerm={setSearchInputTerm}
      />
    </header>
  );
};
