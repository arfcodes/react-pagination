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

export interface AriaLabelProps {
  number?: string,
  next?: string,
  prev?: string,
  first?: string,
  last?: string,
}
