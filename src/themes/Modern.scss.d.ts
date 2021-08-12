declare namespace ModernScssNamespace {
  export interface IModernScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonDisable: string;
    buttonFirst: string;
    buttonLast: string;
    buttonNext: string;
    buttonPrev: string;
    directory: string;
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
