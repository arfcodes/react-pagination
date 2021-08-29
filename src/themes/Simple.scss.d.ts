declare namespace SimpleScssNamespace {
  export interface ISimpleScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
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

declare const SimpleScssModule: SimpleScssNamespace.ISimpleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SimpleScssNamespace.ISimpleScss;
};

export = SimpleScssModule;
