import React, { useEffect, useState } from 'react';

import LogInModal from '@components/modals/LogInModal';

import ButtonSet from './ButtonSet';
import Container from './Container';

interface HeaderProps {
  activate: boolean;
  options: any;
}

export const Header = (props: HeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const options = [
    { link: '#', text: 'dashborad', onClick: () => {}, activate: true },
    { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
    { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
    { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
    { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
    { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  ];

  return (
    <div>
      <ButtonSet setShowModal={setShowModal} />
      <header className="w-100 bg-primary py-4">
        <Container>
          <nav>
            <ul className="flex flex-wrap gap-x-4 gap-y-4 justify-between text-white no-underline items-center capitalize font-bold">
              {options.map(
                ({ link, text, onClick, activate }: any, index: number) => (
                  <li className="list-none" key={index}>
                    <a
                      className={activate ? 'underline text-yellow' : ''}
                      href={link}
                      onClick={onClick}
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </Container>
      </header>
      <LogInModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Header;
