import classNames from 'classnames';
import * as c from './constants';
import { Theme, Color, Size, StyleProps } from './types';
import defaultStyles from './themes/Default.scss';
import simpleStyles from './themes/Simple.scss';
import modernStyles from './themes/Modern.scss';

interface ClassProps {
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
   * The custom styles
   */
  customStyles?: StyleProps,
}

export default class StyleManager {
  prefix: string;
  theme: string;
  color: string;
  size: string;
  /**
   * Take styles properties
   */
  styleProps: StyleProps;
  /**
   * Take custom styles properties
   */
  customStyles?: StyleProps;

  /**
   * Initialize 
   */
  constructor(props: ClassProps) {
    this.prefix = 'pagination__';
    this.theme = props.theme || 'default';
    this.color = props.color || 'default';
    this.size = props.size || 'md';
    this.customStyles = props.customStyles;

    this.styleProps = {};
    this.getStyleProps();
  }

  /**
   * Get classes
   */
  classes(key: keyof StyleProps): any {
    if (this.theme === c.THEME_CUSTOM) {
      return this.prefix + key;
    } else {
      const props = [];
      if (this.isValidStyle(key, this.styleProps)) {
        props.push(this.styleProps[key as keyof StyleProps]);
      }
      if (this.customStyles && this.isValidStyle(key, this.customStyles)) {
        props.push(this.customStyles[key as keyof StyleProps]);
      }
      return classNames(props);
    }
  }

  /**
   * Get styles props
   */
  getStyleProps(): void {
    if (this.theme === c.THEME_SIMPLE) {
      this.styleProps = simpleStyles;
    } else if (this.theme === c.THEME_MODERN) {
      this.styleProps = modernStyles;
    } else {
      this.styleProps = defaultStyles;
    }
  }

  /**
   * Get styles props
   */
  isValidStyle(value: string, props: StyleProps): value is keyof StyleProps {
    if (value) {
      return value in props;
    }
    return false
  }
}