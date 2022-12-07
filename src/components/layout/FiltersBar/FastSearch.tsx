import Filter from '@components/filter/Filter';
import Form from '@components/forms/Form';

interface FastSearchInterface extends Props {
  className?: string;
  filters: any;
  onFilter: Function;
}

const FastSearch = ({ className, filters, onFilter }: FastSearchInterface) => {
  return (
    <Form initialValues={filters} onSubmit={onFilter as any} renderProps>
      <div className={`w-full mb-4 ${className}`}></div>
    </Form>
  );
};

export default FastSearch;
