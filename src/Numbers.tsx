import React, { ReactNode } from 'react';

import StyleManager from './StyleManager';
import Button from './Button';

interface Props {
  /**
   * Style manager
   */
  styler: StyleManager,
  /**
   * Current page
   */
  page: number,
  /**
   * The total of pages
   */
  pagesTotal: number,
  /**
   * The callback invoked when pagination buttons are clicked.
   */
  onChange(page: number): void
  /**
   * The number of main buttons to display.
   */
  numbersDisplayed: number
  /**
   * The number of buttons to display for margins.
   */
  marginNumbersDisplayed: number
  /**
   * The element for ellipsis. 
   */
  ellipsis?: ReactNode,
}

const Numbers: React.FC<Props> = (props) => {
  const { 
    styler, 
    page, 
    numbersDisplayed, 
    pagesTotal,
    onChange
  } = props;

  /**
   * getNumbers
   */
  const getNumbers = () => {
    const numbers = [];
    let start = page;
    let end = page + numbersDisplayed;
    if (end > pagesTotal) {
      end = pagesTotal + 1;
      start = pagesTotal - numbersDisplayed + 1;
    }

    for (let i = start; i < end; i += 1) {
      numbers.push(i);
    }

    return  (
      <>
        {numbers.map(num => {
          const title = `Go ${num} page`;

          return (
            <Button
              key={`button-${num}`}
              styler={styler}
              name="buttonNumber" 
              ariaLabel={title}
              onChange={() => onChange(num)}
              active={num === page}
            >
              {num}
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <span className={styler.classes('numbers')}>
      {getNumbers()}
    </span>
  );
}

export default Numbers;
