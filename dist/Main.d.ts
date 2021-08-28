import React, { ReactNode } from 'react';
import { Theme, Color, Size, StyleProps, AriaLabelProps } from './types';
interface Props {
    /**
     * The current page number.
     */
    page: number;
    /**
     * The total number of items that will be displayed.
     */
    perPage: number;
    /**
     * The total number of items.
     */
    total: number;
    /**
     * The callback invoked when pagination buttons are clicked.
     */
    onChange(page: number): void;
    /**
     * Set aria-label in the buttons
     */
    ariaLabel?: AriaLabelProps;
    /**
     * If `true`, the numbers button will be hidden or just show next & prev button.
     */
    hideNumbers?: boolean;
    /**
     * The number of main buttons to display.
     */
    numbersDisplayed?: number;
    /**
     * The number of buttons to display for margins.
     */
    marginNumbersDisplayed?: number;
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
     * The custom styles for pagination buttons
     */
    styles?: StyleProps;
    /**
     * If `true`, then using native classname
     */
    useClassname?: boolean;
    /**
     * The icon/label for next button
     */
    nextButtonLabel?: ReactNode;
    /**
     * The icon/label for previous button
     */
    prevButtonLabel?: ReactNode;
    /**
     * If `true`, the first & last button will be displayed.
     */
    firstLastButton?: boolean;
    /**
     * The icon/label for first button
     */
    firstButtonLabel?: ReactNode;
    /**
     * The icon/label for last button
     */
    lastButtonLabel?: ReactNode;
    /**
     * The element for ellipsis.
     */
    ellipsis?: ReactNode;
}
declare const Main: React.FC<Props>;
export default Main;
