import React from 'react';
import { SearchBox } from '.';

interface Props {
  properties: any[];
  setProperties: React.Dispatch<React.SetStateAction<any[]>>;
  filteredSearchResults: any[];
  setFilteredSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  searchInputTerm: string;
  setSearchInputTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({
  properties,
  setProperties,
  filteredSearchResults,
  setFilteredSearchResults,
  searchInputTerm,
  setSearchInputTerm,
}: Props) => {
  return (
    <header className='flex flex-col md:flex-row justify-between ml-6 mx-auto '>
      <h1 className='text-6xl sm:text-8xl'>Posh Properties</h1>

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
