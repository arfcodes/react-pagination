declare namespace DefaultScssNamespace {
  export interface IDefaultScss {
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

declare const DefaultScssModule: DefaultScssNamespace.IDefaultScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DefaultScssNamespace.IDefaultScss;
};

export = DefaultScssModule;
