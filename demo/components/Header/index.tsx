import React, { FC } from 'react';

import styles from './Styles.scss';

const Header: FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>React Pagination Demo</h1>
    </div>
  ); 
};

export default Header;
