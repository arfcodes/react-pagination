import React, { useState } from 'react';
import Pagination, { Theme, Color } from '../../../dist'; 
// import Styles from './Styles.scss';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.DEFAULT}
        onChange={(page: number) => setPage(page)}
      />
    </div>
  ); 
};

export default Home;
