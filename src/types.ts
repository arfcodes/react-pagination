import { ReactNode } from 'react';

// Themes
export enum Theme { 
  DEFAULT = 'DEFAULT', 
  BLOCK = 'BLOCK',
  LINE = 'LINE', 
  BUTTONS = 'BUTTONS', 
  CUSTOM = 'CUSTOM',
}

// Colors
export enum Color { 
  DEFAULT = 'DEFAULT',
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
}

// Size constants
export enum Size { 
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}

export interface MainProps {
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
   * The children element, will add after numbers. 
   */
  children?: ReactNode,
  /**
   * The element for ellipsis. 
   */
  ellipsis?: ReactNode,
}

export interface StyleProps {
  root?: string,
  main?: string,
  numbers?: string,
  button?: string,
  buttonDirectory?: string,
  buttonNumber?: string,
  buttonNext?: string,
  buttonPrev?: string,
  buttonFirst?: string,
  buttonLast?: string,
  buttonActive?: string,
  buttonDisable?: string,
  info?: string,
}

export interface AriaLabelProps {
  number?: string,
  next?: string,
  prev?: string,
  first?: string,
  last?: string,
}
