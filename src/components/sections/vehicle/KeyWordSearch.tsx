import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslate from '@hooks/useTranslate';

interface FastSearchInterface extends Props {
  className?: string;
  filters: any;
  onFilter: Function;
}

const KeyWordSearch = ({
  filters,
  onFilter,
  className,
}: FastSearchInterface) => {
  const t = useTranslate();
  return (
    <Form
      className={`w-full ${className}`}
      initialValues={filters}
      onSubmit={onFilter as any}
      renderProps
    >
      {({ values }) => (
        <div className="flex w-full max-w-sm my-4 h-fit">
          <Field
            placeholder={t("Introduzca país, estado, ciudad")}
            name="search"
            styles="rounded-l-md"
          />
          <Button
            bgColor="bg-primary"
            type="submit"
            className="w-fit rounded-l-none border-1 border-primary"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>
      )}
    </Form>
  );
};

export default KeyWordSearch;
