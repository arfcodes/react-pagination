import React, { ReactElement, ReactNode } from 'react';


import { AriaLabelProps } from './types';
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
   * Button numbers
   */
  children: ReactElement,
  /**
   * Set aria-label in the buttons
   */
  ariaLabel?: AriaLabelProps
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
}

const Direction: React.FC<Props> = (props) => {
  const { 
    styler, 
    page, 
    pagesTotal, 
    children, 
    onChange,
    firstLastButton,
    nextButtonLabel,
    prevButtonLabel,
    firstButtonLabel,
    lastButtonLabel,
    ariaLabel,
  } = props;

  const ButtonNext = () => {

    const title = 
      ariaLabel && typeof ariaLabel.next !== 'undefined' 
        ? ariaLabel.next
        : 'Go next page';

    return (
      <Button 
        styler={styler}
        name="buttonNext" 
        ariaLabel={title}
        onChange={() => onChange(page + 1)}
        disabled={page === pagesTotal}
      >
        {nextButtonLabel || 'Next'}
      </Button>
    );
  }

  const ButtonPrev = () => {

    const title = 
      ariaLabel && typeof ariaLabel.prev !== 'undefined' 
        ? ariaLabel.prev
        : 'Go previous page';

    return (
      <Button 
        styler={styler}
        name="buttonPrev" 
        ariaLabel={title}
        onChange={() => onChange(page - 1)}
        disabled={page === 1}
      >
        {prevButtonLabel || 'Prev'}
      </Button>
    );
  };

  const ButtonFirst = () => {

    const title = 
      ariaLabel && typeof ariaLabel.first !== 'undefined' 
        ? ariaLabel.first
        : 'Go first page';

    return (
      <Button 
        styler={styler}
        name="buttonFirst" 
        ariaLabel={title}
        onChange={() => onChange(1)}
        disabled={page === 1}
      >
        {firstButtonLabel || 'First'}
      </Button>
    );
  }

  const ButtonLast = () => {

    const title = 
      ariaLabel && typeof ariaLabel.last !== 'undefined' 
        ? ariaLabel.last
        : 'Go last page';

    return (
      <Button 
        styler={styler}
        name="buttonLast" 
        ariaLabel={title}
        onChange={() => onChange(pagesTotal)}
        disabled={page === pagesTotal}
      >
        {lastButtonLabel || 'Last'}
      </Button>
    );
  }

  return (
    <>
      {firstLastButton ? <ButtonFirst /> : null}
      <ButtonPrev />
      {children}
      <ButtonNext />
      {firstLastButton ? <ButtonLast /> : null}
    </>
  );
}

export default Direction;
