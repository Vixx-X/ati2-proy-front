import React, { useState } from 'react';

interface NavbarProps {
  activatePage?: string | Array<string>;
  options: any;
  link?: string;
  text?: string;
  activate?: string;
  visible?: boolean;
  stylesMargin?: string;
  top?: number;
}

export const Navbar = ({
  options,
  activatePage,
  link,
  text,
  activate,
  visible = false,
  top = 0,
  stylesMargin,
}: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  console.log(activatePage, activate);

  const styleTop = `${top + 58}px`;
  return (
    <li className="list-none">
      {text && (
        <>
          {options ? (
            <div
              className={`hover:text-yellow transition py-4 ${
                activate === activatePage ||
                (activate && activatePage?.includes(activate))
                  ? 'underline text-yellow'
                  : ''
              }`}
              onClick={expand}
            >
              {text}
            </div>
          ) : (
            <a
              className={`hover:text-yellow transition block py-4 ${
                activate === activatePage ||
                (activate && activatePage?.includes(activate))
                  ? 'underline text-yellow'
                  : ''
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
          className={`flex mx-0 px-10 flex-wrap max-h-14 bg-primary gap-x-4 gap-y-4 justify-between text-white no-underline items-center capitalize font-bold cursor-pointer list-none ${stylesMargin}`}
          style={{ top: styleTop }}
        >
          <>
            {options.map((element: any, index: number) => (
              <Navbar
                options={element?.options && element?.options}
                activatePage={activatePage}
                activate={element.activate}
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
