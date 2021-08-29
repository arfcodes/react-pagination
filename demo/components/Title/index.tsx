import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Styles.scss';

interface Props {
  /**
   * Title content
   */
  children: ReactNode,
}

export const H1: FC<Props> = ({ children }) => {
  return (
    <h1 className={cn(styles.general, styles.h1)}>{children}</h1>
  ); 
};

export const H2: FC<Props> = ({ children }) => {
  return (
    <h2 className={cn(styles.general, styles.h2)}>{children}</h2>
  ); 
};

export const H3: FC<Props> = ({ children }) => {
  return (
    <h3 className={cn(styles.general, styles.h3)}>{children}</h3>
  ); 
};

export const H4: FC<Props> = ({ children }) => {
  return (
    <h4 className={cn(styles.general, styles.h4)}>{children}</h4>
  ); 
};

export const H5: FC<Props> = ({ children }) => {
  return (
    <h5 className={cn(styles.general, styles.h5)}>{children}</h5>
  ); 
};

export const H6: FC<Props> = ({ children }) => {
  return (
    <h6 className={cn(styles.general, styles.h6)}>{children}</h6>
  ); 
};
