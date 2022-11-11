import React from 'react';
import { ReactChild } from 'react';

import { faSquare, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BaseModalProps {
  title: string;
  children: ReactChild;
  showModal: boolean;
  backDrop?: boolean;
  setShowModal: any;
}

export const BaseModal = ({
  title,
  children,
  showModal,
  setShowModal,
  backDrop = true,
}: BaseModalProps) => {
  return (
    <>
      {showModal && (
        <>
          <div className="transition-all opacity-1 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-11/12 my-6 mx-auto bg-white max-w-3xl border-x border-b border-gray-300 rounded-t">
              <div className="flex justify- between border-solid rounded-t bg-primary">
                <div className="grow flex px-4 py-2 w-100 justify-center items-center">
                  <p className="font-semibold text-white text-center items-center text-xl capitalize">
                    {title}
                  </p>
                </div>
                <div className="flex gap-5 p-2 justify-center items-center">
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faWindowMinimize}
                  />
                  <FontAwesomeIcon className="text-white" icon={faSquare} />
                  <p
                    className="font-bold text-md text-white cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </p>
                </div>
              </div>
              {/*content*/}
              <div className="p-10">{children}</div>
            </div>
          </div>
          {backDrop && (
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          )}
        </>
      )}
    </>
  );
};

export default BaseModal;
