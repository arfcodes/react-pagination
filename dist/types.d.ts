export declare enum Theme {
    DEFAULT = "DEFAULT",
    SIMPLE = "SIMPLE",
    MODERN = "MODERN",
    CUSTOM = "CUSTOM"
}
export declare enum Color {
    DEFAULT = "DEFAULT",
    LIGHT = "LIGHT",
    DARK = "DARK",
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN",
    ORANGE = "ORANGE"
}
export declare enum Size {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
}
export interface StyleProps {
    root?: string;
    main?: string;
    numbers?: string;
    directory?: string;
    button?: string;
    buttonDirectory?: string;
    buttonNext?: string;
    buttonPrev?: string;
    buttonFirst?: string;
    buttonLast?: string;
    buttonActive?: string;
    buttonDisable?: string;
    info?: string;
}
export interface AriaLabelProps {
    number?: string;
    next?: string;
    prev?: string;
    first?: string;
    last?: string;
}
