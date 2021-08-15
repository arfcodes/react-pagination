declare namespace ModernScssNamespace {
  export interface IModernScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonDisable: string;
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

declare const ModernScssModule: ModernScssNamespace.IModernScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModernScssNamespace.IModernScss;
};

export = ModernScssModule;
