import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { SERVER_URLS } from '@config';

import { deletePostVehicle } from '@fetches/post';

import useTranslate from '@hooks/useTranslate';

import userStore from '@stores/UserStore';

import Alert from '@utils/alert';
import Dialog from '@utils/dialog';
import { makeUrl } from '@utils/makeUrl';

import { faEye, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { URL_EDIT_VEHICLE } = SERVER_URLS;

const EditOptionsIcons = ({ author, id }: any) => {
  const router = useRouter();
  const user = userStore((state: any) => state.user);
  const t = useTranslate();
  return (
    <>
      {user?.id === author ? (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="cursor-pointer"
            title={t('ver')}
          />
          <Link href={makeUrl(URL_EDIT_VEHICLE, { id })} passHref>
            <FontAwesomeIcon
              icon={faPen}
              className="cursor-pointer"
              title={t('editar')}
            />
          </Link>
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer"
            title={t('eliminar')}
            onClick={() => {
              Dialog(t('¿Eliminar post?'), t('¿Seguro que desea elimiar el post?'), [
                {
                  title: t('cancelar'),
                },
                {
                  onClick: async () => {
                    try {
                      await deletePostVehicle(id);
                      Alert('GREEN', t('Se eliminó con exito'));
                      router.push({});
                    } catch {
                      Alert('RED', t('No se pudo eliminar'));
                    }
                  },
                  title: t('confirmar'),
                  bgColor: 'bg-pink',
                },
              ]);
            }}
          />
        </>
      ) : null}
    </>
  );
};

export default EditOptionsIcons;
