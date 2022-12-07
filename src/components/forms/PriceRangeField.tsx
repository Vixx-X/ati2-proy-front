import { useEffect, useMemo, useState } from 'react';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import Field from './Field';
import Select from './Select';

export const PriceRangeField = ({ filter, name, ...props }: Props) => {
  const name_min = `${name}_min`;
  const name_max = `${name}_max`;
  const [inRange, setInRange] = useState(false);

  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Precio
      </p>

      <div role="group">
        <div>
          <Field
            type="radio"
            value={true}
            checked={inRange}
            onChange={() => setInRange(true)}
            className="w-4 h-4"
          />
          <label className="ml-2">Por rango</label>
        </div>
        {inRange ? (
          <>
            <label className="ml-2">Minimo</label>
            <Field name={name_min} />
            <label className="ml-2">Maximo</label>
            <Field name={name_max} />
          </>
        ) : null}
        <div>
          <Field
            type="radio"
            checked={!inRange}
            value={false}
            onChange={() => setInRange(false)}
            className="w-4 h-4"
          />
          <label className="ml-2">Por cualquier precio</label>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeField;
