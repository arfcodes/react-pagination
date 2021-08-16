import React, { ReactNode, useEffect, useState } from 'react';
// import classNames from 'classnames';

import { Theme, Color, Size, StyleProps, AriaLabelProps } from './types';
import StyleManager from './StyleManager';
import Numbers from './Numbers';
import Direction from './Direction';
// import styles from './Main.module.scss';

interface Props {
  /**
   * The current page number.
   */
  page: number
  /**
   * The total number of items that will be displayed.
   */
  perPage: number
  /**
   * The total number of items.
   */
  total: number
  /**
   * The callback invoked when pagination buttons are clicked.
   */
  onChange(page: number): void
  /**
   * Set aria-label in the buttons
   */
  ariaLabel?: AriaLabelProps
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
   * The custom styles for pagination buttons
   */
  styles?: StyleProps,
  /**
   * If `true`, then using native classname
   */
  useClassname?: boolean,
  /**
   * The icon/label for next button
   */
  nextButtonLabel?: ReactNode,
  /**
   * The icon/label for previous button
   */
  prevButtonLabel?: ReactNode,
  /**
   * If `true`, the first & last button will be displayed.
   */
  firstLastButton?: boolean,
  /**
   * The icon/label for first button
   */
  firstButtonLabel?: ReactNode,
  /**
   * The icon/label for last button
   */
  lastButtonLabel?: ReactNode,
  /**
   * The element for ellipsis. 
   */
  ellipsis?: ReactNode,
}

const Main: React.FC<Props> = (props) => {
  const { 
    page, 
    total,
    perPage,
    onChange,
    theme, 
    color, 
    size, 
    styles, 
    useClassname,
    ariaLabel,
    hideNumbers,
    numbersDisplayed,
    marginNumbersDisplayed,
    ellipsis,
    firstLastButton,
    firstButtonLabel,
    lastButtonLabel,
    prevButtonLabel,
    nextButtonLabel,
  } = props;

  const [pagesTotal, setPagesTotal] = useState(0);

  useEffect(() => {
    setPagesTotal(Math.ceil(total/perPage));
  }, [perPage, total]);

  const styler = new StyleManager({ 
    theme, 
    color, 
    size, 
    customStyles: styles, 
    useClassname,
  });

  if (pagesTotal > 1) {
    return (
      <div className={styler.rootClasses()}>
        <div className={styler.classes('main')}>
          <Direction 
            page={page} 
            pagesTotal={pagesTotal} 
            styler={styler} 
            onChange={onChange}
            ariaLabel={ariaLabel}
            firstLastButton={firstLastButton === undefined ? true : firstLastButton}
            firstButtonLabel={firstButtonLabel}
            lastButtonLabel={lastButtonLabel}
            nextButtonLabel={nextButtonLabel}
            prevButtonLabel={prevButtonLabel}
          >
            <>
              {!hideNumbers && (
                <Numbers 
                  styler={styler} 
                  page={page}
                  pagesTotal={pagesTotal}
                  numbersDisplayed={numbersDisplayed || 5}
                  marginNumbersDisplayed={marginNumbersDisplayed}
                  ellipsis={ellipsis}
                  onChange={onChange}
                />
              )}
            </>
          </Direction>
        </div>
      </div>
    );
  }
  return null;
}

export default Main;
