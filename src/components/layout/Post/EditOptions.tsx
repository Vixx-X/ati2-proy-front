import React from 'react';

import Link from 'next/link';

import { SERVER_URLS } from '@config';

import userStore from '@stores/UserStore';

import { makeUrl } from '@utils/makeUrl';

import { faEye, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { URL_EDIT_VEHICLE } = SERVER_URLS;

const EditOptionsIcons = ({ author, id }: any) => {
  const user = userStore((state: any) => state.user);
  return (
    <>
      {user?.id === author ? (
        <>
          <FontAwesomeIcon icon={faEye} className="cursor-pointer" />
          <Link href={makeUrl(URL_EDIT_VEHICLE, { id })}>
            <FontAwesomeIcon icon={faPen} className="cursor-pointer" />
          </Link>
          <FontAwesomeIcon icon={faX} className="cursor-pointer" />{' '}
        </>
      ) : null}
    </>
  );
};

export default EditOptionsIcons;
