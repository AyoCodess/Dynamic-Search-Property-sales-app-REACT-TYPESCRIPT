import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

interface Props {
  property: any;
  setPropertyDescription: React.Dispatch<React.SetStateAction<string>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSavedProperties: React.Dispatch<React.SetStateAction<any[]>>;
}

export const PropertyCard = ({
  property,
  setOpenModal,
  setPropertyDescription,
  setSavedProperties,
}: Props) => {
  const [openDescriptionBox, setOpenDescriptionBox] = useState(false);
  const [isBookedMarked, setIsBookmarked] = useState(false);
  //   console.log('property:', property);

  const bookmarkProperty = (properties: any) => {
    if (!isBookedMarked) {
      setIsBookmarked(true);
      setSavedProperties((savedProperties) => [...savedProperties, property]);
    }

    if (isBookedMarked) {
      console.log(property);
      setIsBookmarked(false);
      setSavedProperties((savedProperties) => {
        const filteredProperties = savedProperties.filter(
          (match) => match.property_id !== property.property_id
        );
        return filteredProperties;
      });
    }
  };

  return (
    <div className='border-2 bg-gray-50 md:h-[26rem] md:w-[20rem]'>
      <div className='relative'>
        <img
          className='md:h-[15rem] md:w-[20rem] sm:object-cover'
          src={
            property.photos[0]
              ? `https://mr0.homeflow.co.uk/${property.photos[0]}`
              : 'https://i.imgur.com/q7L8bkq.png'
          }
          alt={property.display_address}
        />

        <button
          className='absolute top-0 right-2'
          title='Click to bookmark this property'>
          <FaBookmark
            className={` cursor-pointer ${
              !isBookedMarked ? 'text-yellow-400' : 'text-red-400'
            }`}
            size='40'
            onClick={() => bookmarkProperty(property)}
          />
        </button>

        <p className='absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50'>
          {property.price}
        </p>
      </div>

      <div className='px-3 py-2 text-sm'>
        <p>{property.display_address}</p>
      </div>
      <div className='flex flex-col item-end  px-3 h-32'>
        <p className={!openDescriptionBox ? `line-clamp-3` : ''}>
          {property.short_description}
        </p>
        <button
          onClick={() => {
            setPropertyDescription(property.short_description);
            setOpenModal(true);
          }}
          className=' mt-auto cursor-pointer py-1 px-2 mb-3 sm:mb-0 shadow w-18 mr-auto rounded-md hover:bg-gray-200 e transition duration-150 '>
          Read More
        </button>
      </div>
    </div>
  );
};
