import classNames from 'classnames';
import { Theme, Color, Size, StyleProps } from './types';
import defaultStyles from './themes/Default.scss';
import simpleStyles from './themes/Simple.scss';
import modernStyles from './themes/Modern.scss';

export interface StyleManagerProps {
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
   * If `true`, then using native classname
   */
   useClassname?: boolean,
  /**
   * The custom styles
   */
  customStyles?: StyleProps,
}

type ClassesProps = string | string[];

export default class StyleManager {
  useClassname: boolean;
  prefix: string;
  theme: Theme;
  color: Color;
  size: Size;
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
  constructor(props: StyleManagerProps) {
    this.prefix = 'pagination__';
    this.theme = props.theme || Theme.DEFAULT;
    this.color = props.color || Color.DEFAULT;
    this.size = props.size || Size.MD;
    this.useClassname = !!props.useClassname;
    this.customStyles = props.customStyles;

    this.styleProps = {};
    this.getStyleProps();
  }

  /**
   * Get classes
   */
  classes(key: ClassesProps): any {
    let keys: any = key;
    if (! Array.isArray(key)) {
      keys = [key];
    }
    let props: string[] = [];
    keys.forEach((k: keyof StyleProps) => {
      props = props.concat(this.getClass(k));
    });
    // console.log(keys);
    // console.log(props);
    return classNames(props);
  }

  /**
   * Get classes
   */
  rootClasses(): any {
    const props: string[] = [];
    props.push(this.getClass('root'));
    if (!this.useClassname && this.theme !== Theme.CUSTOM) {
      const colorKey = `color${this.color}` as keyof StyleProps;
      props.push(this.getStyle(colorKey));
      const sizeKey = `size${this.size}` as keyof StyleProps;
      props.push(this.getStyle(sizeKey));
    }
    return classNames(props);
  }

  /**
   * Get class
   */
  getClass(key: keyof StyleProps): any {
    if (this.useClassname) {
      return [`${this.prefix}${key}`];
    } else if (this.theme === Theme.CUSTOM) {
      if (this.customStyles && this.isValidStyle(key, this.customStyles)) {
        return [this.customStyles[key as keyof StyleProps]];
      }
    } else {
      return this.getStyle(key);
    }
  }

  /**
   * Get style
   */
  getStyle(key: keyof StyleProps): any {
    const props = [];
    if (this.isValidStyle(key, this.styleProps)) {
      props.push(this.styleProps[key as keyof StyleProps]);
    }
    if (this.customStyles && this.isValidStyle(key, this.customStyles)) {
      props.push(this.customStyles[key as keyof StyleProps]);
    }
    return props;
  }
  
  /**
   * Get styles props
   */
  getStyleProps(): void {
    if (this.theme === Theme.SIMPLE) {
      this.styleProps = simpleStyles;
    } else if (this.theme === Theme.MODERN) {
      this.styleProps = modernStyles;
    } else {
      this.styleProps = defaultStyles;
    }
  }

  /**
   * Get styles props
   */
  isValidStyle(value: keyof StyleProps, props: StyleProps): value is keyof StyleProps {
    if (value) {
      return value in props;
    }
    return false
  }
}