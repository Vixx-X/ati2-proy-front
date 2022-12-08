import ErrorMsg from '@components/forms/ErrorMsg';
import RadioGroup from '@components/forms/RadioGroup';

import useTranslate from '@hooks/useTranslate';

export const LanguageSection = () => {
  const t = useTranslate();
  const choices = [
    {
      value: 'es',
      text: t('spanish'),
    },
    {
      value: 'en',
      text: t('english'),
    },
  ];
  return (
    <>
      <div className="flex gap-x-10 justify-center">
        <RadioGroup
          name="user.language"
          choices={choices}
          className="flex capitalize gap-x-20"
        />
      </div>
      <ErrorMsg name="user.language" />
    </>
  );
};

export default LanguageSection;
