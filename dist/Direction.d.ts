import React, { ReactElement, ReactNode } from 'react';
import { AriaLabelProps } from './types';
import StyleManager from './StyleManager';
interface Props {
    /**
     * Style manager
     */
    styler: StyleManager;
    /**
     * Current page
     */
    page: number;
    /**
     * The total of pages
     */
    pagesTotal: number;
    /**
     * The callback invoked when pagination buttons are clicked.
     */
    onChange(page: number): void;
    /**
     * Button numbers
     */
    children: ReactElement;
    /**
     * Set aria-label in the buttons
     */
    ariaLabel?: AriaLabelProps;
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
}
declare const Direction: React.FC<Props>;
export default Direction;
