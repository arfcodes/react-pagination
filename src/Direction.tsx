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
  } = props;

  const ButtonNext = () => (
    <Button 
      styler={styler}
      name="buttonNext" 
      ariaLabel="Go next page"
      onChange={() => onChange(page + 1)}
      disabled={page === pagesTotal}
    >
      {nextButtonLabel || 'Next'}
    </Button>
  );

  const ButtonPrev = () => (
    <Button 
      styler={styler}
      name="buttonPrev" 
      ariaLabel="Go prev page"
      onChange={() => onChange(page - 1)}
      disabled={page === 1}
    >
      {prevButtonLabel || 'Prev'}
    </Button>
  );

  const ButtonFirst = () => (
    <Button 
      styler={styler}
      name="buttonFirst" 
      ariaLabel="Go first page"
      onChange={() => onChange(1)}
      disabled={page === 1}
    >
      {firstButtonLabel || 'First'}
    </Button>
  );

  const ButtonLast = () => (
    <Button 
      styler={styler}
      name="buttonLast" 
      ariaLabel="Go last page"
      onChange={() => onChange(pagesTotal)}
      disabled={page === pagesTotal}
    >
      {lastButtonLabel || 'Last'}
    </Button>
  );

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
