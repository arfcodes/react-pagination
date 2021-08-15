import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pagination, { Theme, Color } from '../src';
// import Styles from './Styles.scss';

const App = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  return (
    <div>
      <Pagination
        page={page} 
        total={99} 
        perPage={10} 
        theme={Theme.MODERN} 
        color={Color.RED}
        onChange={page => setPage(page)}
      />
    </div>
  ); 
};

// const App = () => <div><Pagination useClassname /></div>;

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));
