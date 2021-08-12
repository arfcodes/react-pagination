import React, { ReactElement } from 'react';
// import classNames from 'classnames';

import { Theme, Color, Size, StyleProps } from './types';
import StyleManager from './StyleManager';
// import styles from './Main.module.scss';

interface Props {
  /**
   * The current page number.
   */
  page: number
  /**
   * The total number of items.
   */
  total: number
  /**
   * The callback invoked when pagination buttons are clicked.
   */
  onChange(page: number): void
  /**
   * If `true`, the numbers button will be hidden or just show next & prev button.
   */
  hideNumbers?: boolean
  /**
   * The number of main buttons to display.
   */
  numbersDisplayed?: number
  /**
   * The number of buttons to display for margins.
   */
  marginNumbersDisplayed?: number
  /**
   * The theme/style of the pagination buttons.
   */
  theme?: Theme,
  /**
   * The color of the pagination buttons.
   */
  color?: Color,
  /**
   * The size of the pagination buttons.
   */
  size?: Size,
  /**
   * The size of the pagination buttons.
   */
  styles?: StyleProps,
  /**
   * The icon/label for next button
   */
  nextButtonIcon?: ReactElement,
  /**
   * The icon/label for previous button
   */
  prevButtonIcon?: ReactElement,
  /**
   * If `true`, the first & last button will be displayed.
   */
  firstLastButton?: boolean,
  /**
   * The icon/label for first button
   */
  firstButtonIcon?: ReactElement,
  /**
   * The icon/label for last button
   */
  lastButtonIcon?: ReactElement,
  /**
   * The element for ellipsis. 
   */
  ellipsis?: ReactElement,
  /**
   * The format for pagination info
   */
  infoFormat?: string,
  /**
   * The position for pagination info
   */
  infoPosition?: 'left' | 'center' | 'right',
}

const Main: React.FC<Props> = (props) => {
  const { theme, color, size, styles } = props;

  const styler = new StyleManager({ theme, color, size, customStyles: styles });

  return (
    <div className={styler.classes('root')}>
      <div className={styler.classes('main')}>
        <h2>Pagination</h2>
        <button type="button" className={styler.classes('button')}>1</button>
      </div>
    </div>
  );
}

export default Main;
