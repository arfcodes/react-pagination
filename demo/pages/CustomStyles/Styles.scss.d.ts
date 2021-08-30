declare namespace StylesScssNamespace {
  export interface IStylesScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonFirst: string;
    buttonLast: string;
    buttonNumber: string;
    ellipsis: string;
    info: string;
    main: string;
    numbers: string;
    root: string;
  }
}

declare const StylesScssModule: StylesScssNamespace.IStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesScssNamespace.IStylesScss;
};

export = StylesScssModule;
