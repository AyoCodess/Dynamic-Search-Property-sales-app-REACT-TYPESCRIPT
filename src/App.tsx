import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PropertyCard, SearchBox, Modal } from './components';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [properties, setProperties] = useState<any[] | undefined>(undefined);
  const [propertyDescription, setPropertyDescription] = useState<
    string | undefined
  >(undefined);

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

  return (
    <div className='container mx-auto my-5'>
      <Header properties={properties} setProperties={setProperties} />

      <div className='grid  grid-cols-1 gap-4  mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {!!properties &&
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
