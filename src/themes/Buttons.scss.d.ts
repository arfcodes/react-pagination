declare namespace ButtonsScssNamespace {
  export interface IButtonsScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonFirst: string;
    buttonLast: string;
    buttonNumber: string;
    colorBLUE: string;
    colorDARK: string;
    colorGREEN: string;
    colorLIGHT: string;
    colorORANGE: string;
    colorRED: string;
    ellipsis: string;
    main: string;
    numbers: string;
    root: string;
  }
}

declare const ButtonsScssModule: ButtonsScssNamespace.IButtonsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonsScssNamespace.IButtonsScss;
};

export = ButtonsScssModule;
