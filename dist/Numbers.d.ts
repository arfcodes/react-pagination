import React, { ReactNode } from 'react';
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
     * The number of main buttons to display.
     */
    numbersDisplayed: number;
    /**
     * The number of buttons to display for margins.
     */
    marginNumbersDisplayed?: number;
    /**
     * The element for ellipsis.
     */
    ellipsis?: ReactNode;
}
declare const Numbers: React.FC<Props>;
export default Numbers;
