import RadioGroup from '@components/forms/RadioGroup';
import ErrorMsg from '@components/forms/ErrorMsg';

const choices = [
  {
    value: 'ES',
    text: 'spanish',
  },
  {
    value: 'EN',
    text: 'english',
  },
];

export const LanguageSection = () => {
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
