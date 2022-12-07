import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { PAGE_SIZE } from '@config';

import ReactPaginate from 'react-paginate';

interface PaginateProps {
  total: number;
}

export default function Paginate({ total }: PaginateProps) {
  const router = useRouter();
  const query = router.query;

  const limit = query?.limit ? parseInt(query?.limit as any) : PAGE_SIZE;

  const handlePagination = ({ selected }: any) => {
    router.push({
      query: { ...query, offset: parseInt(selected) * limit },
    });
  };

  const pages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      previousLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 -12 24 50"
        >
          <path d="M3 12l18-12v24z" fill="#29A9E0" />
        </svg>
      }
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 -12 24 50"
        >
          <path d="M21 12l-18 12v-24z" fill="#29A9E0" />
        </svg>
      }
      breakLabel={'...'}
      pageCount={pages}
      onPageChange={handlePagination}
      forcePage={(query?.page ?? 1) as any}
      containerClassName={'flex items-center justify-center list-none'}
      pageClassName={
        'ml-0.5 p-1 mr-0.5 w-8 h-8 rounded-md text-center border border-gray-400'
      }
      activeClassName={
        'ml-0.5 p-1 mr-0.5 w-8 h-8 rounded-md text-center border border-blue-500'
      }
      nextLinkClassName={'ml-2 p-1 mr-2 w-8 h-8 rounded-md text-center'}
      previousLinkClassName={'ml-2 p-1 mr-2 w-8 h-8 rounded-md text-center'}
      renderOnZeroPageCount={null as any}
    />
  );
}
