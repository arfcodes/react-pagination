import React, { FC } from 'react';

import Menu from './Menu';
import styles from './Styles.scss';

const Sidebar: FC = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.nav}>
        <Menu exact path="/">Home</Menu>
        <Menu path="/custom-icon">Custom Icon</Menu>
        <Menu path="/custom-styles">Custom Styles</Menu>
        <Menu path="/next-prev">Next/Prev</Menu>
        <Menu path="/next-prev-info">Next/Prev With Info</Menu>
        <Menu path="/request">Request Example</Menu>
      </ul>
    </div>
  ); 
};

export default Sidebar;
