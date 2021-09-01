import React, { useState } from 'react';
import Pagination, { Theme, Color } from '../../../src';

// import { H2, H3 } from '../../components/Title';
// import Styles from './Styles.scss';

const Home: React.FC = () => {
  const [page, setPage] = useState(4);

  return (
    <div>
      <Pagination
        page={page} 
        total={1000}  
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.BLUE}
        useClassname
        ariaLabel={{
          number: 'Pergi ke halaman {page}',
          first: 'Pergi ke halaman pertama',
          last: 'Pergi ke halaman terakhir',
          next: 'Pergi ke halaman berikutnya',
          prev: 'Pergi ke halaman sebelumnya',
        }}
        onChange={(page: number) => setPage(page)}
      />
    </div>
  ); 
};

export default Home;
