import type { NextPage } from 'next';

import MainContainer from '@components/layout/MainContainer';

const options = [
  { link: '#', text: 'dashborad', onClick: () => {}, activate: true },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
];

const Landing: NextPage = () => {
  return (
    <MainContainer>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[85%] bg-primary py-2 px-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-4 justify-between text-white no-underline items-center capitalize font-bold">
            {options.map(
              ({ link, text, onClick, activate }: any, index: number) => (
                <li key={index}>
                  <a
                    className={activate ? 'underline text-secundary' : ''}
                    href={link}
                    onClick={onClick}
                  >
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-[85%] bg-primary p-2 mt-4">
          <p className="w-full text-center">Publicar Vehiculo</p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;
