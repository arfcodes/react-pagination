declare namespace ButtonsScssNamespace {
  export interface IButtonsScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonFirst: string;
    buttonLast: string;
    buttonNext: string;
    buttonNumber: string;
    buttonPrev: string;
    colorDEFAULT: string;
    colorRED: string;
    info: string;
    main: string;
    root: string;
  }
}

declare const ButtonsScssModule: ButtonsScssNamespace.IButtonsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonsScssNamespace.IButtonsScss;
};

export = ButtonsScssModule;
