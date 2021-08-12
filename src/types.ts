import * as c from './constants';

const themeTypes = [
  c.THEME_DEFAULT, 
  c.THEME_SIMPLE, 
  c.THEME_MODERN,
  c.THEME_CUSTOM,
] as const;
export type Theme = (typeof themeTypes)[number];

const colorTypes = [
  c.COLOR_DEFAULT, 
  c.COLOR_LIGHT, 
  c.COLOR_RED,
  c.COLOR_BLUE,
  c.COLOR_GREEN,
  c.COLOR_ORANGE,
] as const;
export type Color = (typeof colorTypes)[number];

const sizeTypes = [
  c.SIZE_XS, 
  c.SIZE_SM, 
  c.SIZE_MD, 
  c.SIZE_LG, 
  c.SIZE_XL,
] as const;
export type Size = (typeof sizeTypes)[number];

export interface StyleProps {
  root?: string,
  main?: string,
  numbers?: string,
  directory?: string,
  button?: string,
  buttonDirectory?: string,
  buttonNext?: string,
  buttonPrev?: string,
  buttonFirst?: string,
  buttonLast?: string,
  buttonActive?: string,
  buttonDisable?: string,
  info?: string,
}
