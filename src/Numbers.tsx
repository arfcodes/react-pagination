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
  marginNumbersDisplayed?: number
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
    marginNumbersDisplayed, 
    pagesTotal,
    onChange,
    ellipsis,
  } = props;

  const ElipsisElement = () => (
    <span className={styler.classes('ellipsis')}>
      {ellipsis || '...'}
    </span>
  );

  /**
   * getNumbers
   */
  const getNumbers = () => {
    let half = Math.floor(numbersDisplayed/2);
    if (half > 1 && numbersDisplayed % 2 === 0) {
      half -= 1;
    }
    let start = page - half;
    if (start < 1) {
      start = 1;
    }
    let end = start + numbersDisplayed;
    if (end > pagesTotal) {
      end = pagesTotal + 1;
      start = pagesTotal - numbersDisplayed + 1;
    }
    const numbers = getRange(start, end);

    return (
      <>
        {getLeftMargins(start)}
        {getButtons(numbers)}
        {getRightMargins(end - 1)}
      </>
    );
  };

  /**
   * getLeftMargins
   */
  const getLeftMargins = (first: number) => {
    
    if (marginNumbersDisplayed === undefined || marginNumbersDisplayed !== 0) {
      const margin = marginNumbersDisplayed ? marginNumbersDisplayed : 1;
      let isShow = true;
  
      const start = 1;
      let end = start + margin;
      if (end >= first) {
        end = first - 1;
        if (end < 1) {
          isShow = false
        }
      }
      const numbers = getRange(start, end);
  
      if (isShow && numbers.length > 0) {
        return (
          <>
            {getButtons(numbers)}
            <ElipsisElement />
          </>
        );
      }
    } else if (first > 1) {
      return <ElipsisElement />;
    }
    return null;
  };

  /**
   * getRightMargins
   */
  const getRightMargins = (last: number) => {
    if (marginNumbersDisplayed === undefined || marginNumbersDisplayed !== 0) {
      const margin = marginNumbersDisplayed ? marginNumbersDisplayed : 1;
      let isShow = true;
  
      const end = pagesTotal;
      let start = end - (margin - 1);
      if (start <= last) {
        start = last + 1;
        if (start > pagesTotal) {
          isShow = false
        }
      }
      const numbers = getRange(start, end + 1);
  
      if (isShow && numbers.length > 0) {
        return (
          <>
            <ElipsisElement />
            {getButtons(numbers)}
          </>
        );
      }
    } else if (last < pagesTotal) {
      return <ElipsisElement />;
    }
    return null;
  };

  /**
   * getButtons
   */
  const getButtons = (numbers: number[]) => {
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

  /**
   * getRange
   */
  const getRange = (start: number, end?: number) => {
    let range = [];
    if (!end || start === end) {
      range = [start];
    } else {
      for (let i = start; i < end; i += 1) {
        range.push(i);
      }
    }
    return range;
  };

  return (
    <span className={styler.classes('numbers')}>
      {getNumbers()}
    </span>
  );
}

export default Numbers;
