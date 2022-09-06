import React, { useState } from 'react';
import { ReactChild } from 'react';

import {
  faSquare,
  faWindowMinimize,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BaseModalProps {
  title: string;
  buttonText: string;
  children: ReactChild;
}

export const BaseModal = ({ title, children, buttonText }: BaseModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white ">
              <div className="flex justify-between border-solid border-4 border-sky-900 rounded-t bg-sky-500">
                <div className="flex w-2/3 justify-center items-center">
                  <p className="font-semibold text-white text-center items-center">
                    {title}
                  </p>
                </div>
                <div className="w-1/3 flex gap-5 p-2 justify-center items-center">
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faWindowMinimize}
                  />
                  <FontAwesomeIcon className="text-white" icon={faSquare} />
                  <button onClick={() => setShowModal(false)}>
                    <FontAwesomeIcon className="text-white" icon={faXmark} />
                  </button>
                </div>
              </div>
              {/*content*/}
              <>{children}</>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default BaseModal;
