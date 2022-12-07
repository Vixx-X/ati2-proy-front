import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            placeholder="Introduzca país, estado, ciudad"
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
