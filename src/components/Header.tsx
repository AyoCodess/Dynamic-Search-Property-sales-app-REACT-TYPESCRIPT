import React from 'react';
import { SearchBox } from '.';

interface Props {
  properties: any[];
  setProperties: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Header = ({ properties, setProperties }: Props) => {
  return (
    <header className='flex flex-col md:flex-row justify-between ml-6 mx-auto '>
      <h1 className='text-6xl sm:text-8xl'>Posh Properties</h1>

      <SearchBox properties={properties} setProperties={setProperties} />
    </header>
  );
};
