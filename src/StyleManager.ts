import classNames from 'classnames';
import { Theme, Color, Size, StyleProps } from './types';
import defaultStyles from './themes/Default.scss';
import blockStyles from './themes/Block.scss';
import lineStyles from './themes/Line.scss';
import buttonsStyles from './themes/Buttons.scss';

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
   * Take classnames list
   */
  classnames?: any;

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
    this.classnames = {};
    this.getStyleProps();
    this.getClassnames();
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
      const val = typeof this.classnames[k] !== 'undefined' ? this.classnames[k] : '';
      props = props.concat(val);
    });
    return classNames(props);
  }
  
  /**
   * Get styles props
   */
  getStyleProps(): void {
    if (this.theme === Theme.BLOCK) {
      this.styleProps = blockStyles;
    } else if (this.theme === Theme.LINE) {
      this.styleProps = lineStyles;
    } else if (this.theme === Theme.BUTTONS) {
      this.styleProps = buttonsStyles;
    } else {
      this.styleProps = defaultStyles;
    }
  }
  
  /**
   * Get classnames
   */
  getClassnames(): void {
    const names: StyleProps = {
      'root': '',
      'main': '',
      'numbers': '',
      'button': '',
      'buttonDirectory': '',
      'buttonNumber': '',
      'buttonNext': '',
      'buttonPrev': '',
      'buttonFirst': '',
      'buttonLast': '',
      'buttonActive': '',
      'buttonDisable': '',
      'info': '',
    };
    for (const key in names) {
      let cn = '';
      if (key === 'root') {
        cn = this.getRootClasses();
      } else {
        cn = this.getClass(key as keyof StyleProps);
      }
      names[key as keyof StyleProps] = cn;
    }
    
    this.classnames = names;
  }

  /**
   * Get root classes
   */
  getRootClasses(): any {
    const props: string[] = [];
    props.push(this.getClass('root'));
    if (!this.useClassname && this.theme !== Theme.CUSTOM) {
      const colorKey = `color${this.color}` as keyof StyleProps;
      props.push(this.getStyle(colorKey));
      const sizeKey = `size${this.size}` as keyof StyleProps;
      props.push(this.getStyle(sizeKey));
    }
    return props;
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
  isValidStyle(value: keyof StyleProps, props: StyleProps): value is keyof StyleProps {
    if (value) {
      return value in props;
    }
    return false
  }
}