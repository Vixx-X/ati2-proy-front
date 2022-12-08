import useTranslate from '@hooks/useTranslate';
import React from 'react';

const AddressPost = ({ address, className }: any) => {
  const t = useTranslate();
  return (
    <div className={`capitalize text-lg my-4 ${className}`}>
      <h4>
        <span className="font-bold underline">{t('país')}:</span>{' '}
        {address?.city?.state?.country.name}
      </h4>
      <h4>
        <span className="font-bold underline">{t('estado')}:</span>{' '}
        {address?.city?.state?.name}
      </h4>
      <h4>
        <span className="font-bold underline">{t('zona')}:</span> {address?.city?.name}
      </h4>
    </div>
  );
};

export default AddressPost;
