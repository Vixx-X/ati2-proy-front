import React from 'react';

const AddressPost = ({ address, className }: any) => {
  return (
    <div className={`capitalize text-lg my-4 ${className}`}>
      <h4>
        <span className="font-bold underline">country:</span>{' '}
        {address.city?.state.country.name}
      </h4>
      <h4>
        <span className="font-bold underline">state:</span>{' '}
        {address.city?.state.name}
      </h4>
      <h4>
        <span className="font-bold underline">zone:</span> {address.city?.name}
      </h4>
    </div>
  );
};

export default AddressPost;
