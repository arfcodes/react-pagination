import { Theme, Color, Size, StyleProps } from './types';
export interface StyleManagerProps {
    /**
     * The theme/style of the pagination buttons.
     */
    theme?: Theme;
    /**
     * The color of the pagination buttons.
     */
    color?: Color;
    /**
     * The size of the pagination buttons.
     */
    size?: Size;
    /**
     * If `true`, then using native classname
     */
    useClassname?: boolean;
    /**
     * The custom styles
     */
    customStyles?: StyleProps;
}
declare type ClassesProps = string | string[];
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
    constructor(props: StyleManagerProps);
    /**
     * Get classes
     */
    classes(key: ClassesProps): any;
    /**
     * Get classes
     */
    rootClasses(): any;
    /**
     * Get class
     */
    getClass(key: keyof StyleProps): any;
    /**
     * Get style
     */
    getStyle(key: keyof StyleProps): any;
    /**
     * Get styles props
     */
    getStyleProps(): void;
    /**
     * Get styles props
     */
    isValidStyle(value: keyof StyleProps, props: StyleProps): value is keyof StyleProps;
}
export {};
