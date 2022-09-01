import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PropertyCard, SearchBox, Modal } from './components';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [properties, setProperties] = useState<any[] | undefined>(undefined);
  const [propertyDescription, setPropertyDescription] = useState<
    string | undefined
  >(undefined);
  const [searchInputTerm, setSearchInputTerm] = useState<string>('');

  const [filteredSearchResults, setFilteredSearchResults] = useState<any[]>([]);

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState<any[] | undefined>([
    undefined,
  ]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  console.log(filteredSearchResults.length);
  console.log(searchInputTerm.length);
  return (
    <div className='container mx-auto my-5'>
      <Header
        properties={properties}
        setProperties={setProperties}
        filteredSearchResults={filteredSearchResults}
        setFilteredSearchResults={setFilteredSearchResults}
        searchInputTerm={searchInputTerm}
        setSearchInputTerm={setSearchInputTerm}
      />

      {searchInputTerm.length > 0 && filteredSearchResults.length === 0 && (
        <div className='grid place-items-center mt-20 text-2xl'>
          There are no properties matching your search.
        </div>
      )}

      <div className='grid  grid-cols-1 gap-4  mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {/*properties filter when search box has at least 2 characters */}
        {searchInputTerm.length > 1 &&
          filteredSearchResults.map((property) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setPropertyDescription={setPropertyDescription}
            />
          ))}
        {/*default view when app mounts */}
        {properties &&
          searchInputTerm.length < 1 &&
          properties.map((property) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setPropertyDescription={setPropertyDescription}
            />
          ))}
        {/*prevents empty results when user has a single letter as the searchbox */}
        {properties &&
          searchInputTerm.length === 1 &&
          properties.map((property) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setPropertyDescription={setPropertyDescription}
            />
          ))}
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        propertyDescription={propertyDescription}
      />
    </div>
  );
}

export default App;
