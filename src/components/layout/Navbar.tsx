import React, { useState } from 'react';

interface NavbarProps {
  activatePage?: string;
  options: any;
  link?: string;
  text?: string;
  visible?: boolean;
  stylesMargin?: string;
  top?: number;
}

export const Navbar = ({
  options,
  activatePage,
  link,
  text,
  visible = false,
  top = 0,
  stylesMargin,
}: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  const styleTop = `${top + 58}px`;
  return (
    <li className="list-none">
      {text && (
        <>
          {options ? (
            <div
              className={`hover:text-yellow transition py-4 ${
                text === activatePage ? 'underline text-yellow' : ''
              }`}
              // onMouseOver={expand}
              // onMouseLeave={() => setIsVisible(false)}
              onClick={expand}
            >
              {text}
            </div>
          ) : (
            <a
              className={`hover:text-yellow transition block py-4 ${
                text === activatePage ? 'underline text-yellow' : ''
              }`}
              href={link}
            >
              {text}
            </a>
          )}
        </>
      )}
      {isVisible && options ? (
        <ul
          className={`px-0 mx-0 flex flex-wrap max-h-14 bg-primary gap-x-4 gap-y-4 justify-between text-white no-underline items-center capitalize font-bold cursor-pointer list-none ${stylesMargin}`}
          style={{ top: styleTop }}
        >
          <>
            {options.map((element: any, index: number) => (
              <Navbar
                options={element?.options && element?.options}
                activatePage={activatePage}
                link={element.link}
                text={element.text}
                stylesMargin={`ml-0 absolute`}
                top={top + 56}
                key={element.text}
              />
            ))}
          </>
        </ul>
      ) : (
        <></>
      )}
    </li>
  );
};
export default Navbar;
