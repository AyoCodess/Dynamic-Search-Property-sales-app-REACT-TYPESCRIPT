import { Dialog, Transition } from '@headlessui/react';

import React, { useRef, Fragment } from 'react';

interface Props {
  openModal: boolean;
  propertyDescription: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  openModal,
  setOpenModal,
  propertyDescription,
}: Props) => {
  const getLink = useRef(null);
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={getLink}
        onClose={setOpenModal}>
        <div className='flex items-end justify-center md:min-h-screen min-h-[70vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen '
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div
              className={` w-96 bg-white justify-between inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:min-h-[20vh] sm:w-full`}>
              <div>
                <div className={` px-2 pt-2 pb-4`}>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <span>X</span>
                      <p className=' w-full'>Full Property Description</p>
                    </div>
                    <hr className='border mt-2 w-[100vw] ml-[-2rem]' />
                    <div className='mt-2 text-left'>
                      {propertyDescription && (
                        <section>
                          {propertyDescription.split('.').map((text, i) => {
                            return (
                              <p className='mt-2' key={i}>
                                {text}
                              </p>
                            );
                          })}
                        </section>
                      )}
                    </div>
                  </div>
                </div>

                <button className='m-2 p-2 bg-gray-300 w-32 text-center rounded-md shadow'>
                  Enquire
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
