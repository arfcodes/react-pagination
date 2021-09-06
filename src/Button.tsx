import React, { ReactNode } from 'react';

import StyleManager from './StyleManager';

interface Props {
  /**
   * Style manager
   */
  styler: StyleManager,
  /**
   * The callback invoked when pagination buttons are clicked.
   */
  onChange(): void
  /**
   * Button content
   */
  children: ReactNode,
  /**
   * Aria-label content
   */
  ariaLabel: string,
  /**
   * Button name
   */
  name: string,
  /**
   * If `true`, then disable the button
   */
  disabled?: boolean,
  /**
   * If `true`, then active the button
   */
  active?: boolean,
}

const Button: React.FC<Props> = (props) => {
  const { 
    styler, 
    name, 
    children, 
    onChange, 
    ariaLabel, 
    disabled,
    active
  } = props;
  const btnClasses = ['button', name];
  if (name !== 'buttonNumber') {
    btnClasses.push('buttonDirectory');
  }
  if (active) {
    btnClasses.push('buttonActive');
  }

  return (
    <button 
      type="button" 
      title={ariaLabel} 
      aria-label={ariaLabel} 
      className={styler.classes(btnClasses)}
      onClick={(evt) => {
        evt.preventDefault();
        onChange();
      }}
      disabled={disabled}
    >
      <span className={styler.classes('buttonContent')}>
        {children}
      </span>
    </button>
  );
}

export default Button;
