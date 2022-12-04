import RadioGroup from '@components/forms/RadioGroup';

const choices = [
  {
    value: 'es',
    text: 'spanish',
  },
  {
    value: 'en',
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
    </>
  );
};

export default LanguageSection;
