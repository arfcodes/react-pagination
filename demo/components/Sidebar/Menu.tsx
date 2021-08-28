import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Styles.scss';

interface Props {
  /**
   * path
   */
  path: string,
  /**
   * Menu label
   */
  children: ReactNode,
  /**
   * Menu exact
   */
  exact?: boolean,
}

const Menu: FC<Props> = ({ path, children, exact }) => (
  <li>
    <NavLink 
      className={styles.link}
      activeClassName={styles.linkActive}
      to={path}
      exact={exact}
    >
      <span>{children}</span>
    </NavLink>
  </li>
)

export default Menu;
