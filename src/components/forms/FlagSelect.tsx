import { useState } from 'react';

import { getCountries } from '@fetches/address';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useTranslate from '@hooks/useTranslate';
import useSWR from 'swr';

interface FlagSelectInterface {
  number?: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
  setValue?: any;
}

export const SelectedElement = ({
  img,
  iso_3166_1_a2,
  printable_name,
  phone_code,
  number,
}: any) => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="mr-2 w-8 h-full">
        <img width="25" height="13" src={img} alt={iso_3166_1_a2} />
      </div>
      {!number ? printable_name : `+${phone_code}`}
    </div>
  );
};

export const FlagSelect = ({
  number = false,
  placeholder,
  value,
  className,
  setValue,
  ...props
}: FlagSelectInterface) => {
  const { data } = useSWR(['countries', { limit: 300 }], (_, query) =>
    getCountries(query)
  );
  const [element, setElement] = useState<any>(
    value ? value : placeholder ? placeholder : '----'
  );
  const [styles, setStyles] = useState('hidden');

  return (
    <div className={`relative ${className}`}>
      <button
        className="truncate border border-gray-400 py-2 px-4 flex justify-between items-center text-gray-400 cursor-pointer focus:border-darkprimary rounded-md w-28"
        onClick={() => setStyles(styles == 'block' ? 'hidden' : 'block')}
        type="button"
      >
        {element}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <ul
        className={`mx-0 list-none absolute w-full z-10 h-80 overflow-scroll border border-gray-200 rounded-md drop-shadow-md ${styles}`}
        {...props}
      >
        <>
          <li
            className={`py-2 px-4 bg-white text-gray-300 ${styles}`}
            onClick={() => setStyles('block')}
          >
            {placeholder ? placeholder : '--Seleccionar--'}
          </li>
          {data?.results.map(
            (
              { img, iso_3166_1_a2, phone_code, printable_name }: any,
              index: number
            ) => (
              <li
                key={index}
                value={!number ? iso_3166_1_a2 : phone_code}
                className="py-2 px-4 bg-white hover:bg-gray-200"
                onClick={() => {
                  setElement(
                    <SelectedElement
                      img={img}
                      iso_3166_1_a2={iso_3166_1_a2}
                      printable_name={printable_name}
                      phone_code={phone_code}
                      number={number}
                    />
                  );
                  setValue(number ? `+${phone_code}` : iso_3166_1_a2);
                  setStyles('hidden');
                }}
              >
                <SelectedElement
                  img={img}
                  iso_3166_1_a2={iso_3166_1_a2}
                  printable_name={printable_name}
                  phone_code={phone_code}
                  number={number}
                />
              </li>
            )
          )}
        </>
      </ul>
    </div>
  );
};

export default FlagSelect;
