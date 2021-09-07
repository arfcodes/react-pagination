import React, { ReactNode } from 'react';
import StyleManager from './StyleManager';
interface Props {
    /**
     * Style manager
     */
    styler: StyleManager;
    /**
     * The callback invoked when pagination buttons are clicked.
     */
    onChange(): void;
    /**
     * Button content
     */
    children: ReactNode;
    /**
     * Aria-label content
     */
    ariaLabel: string;
    /**
     * Button name
     */
    name: string;
    /**
     * If `true`, then disable the button
     */
    disabled?: boolean;
    /**
     * If `true`, then active the button
     */
    active?: boolean;
}
declare const Button: React.FC<Props>;
export default Button;
