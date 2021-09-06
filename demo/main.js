import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../dist'; 
// import Styles from './Styles.scss';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        numbersDisplayed={6}
        onChange={page => setPage(page)}
      />
    </div>
  ); 
};

// const App = () => <div><Pagination useClassname /></div>;

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));
