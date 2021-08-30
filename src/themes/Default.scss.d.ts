declare namespace DefaultScssNamespace {
  export interface IDefaultScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    buttonNumber: string;
    colorBLUE: string;
    colorDARK: string;
    colorGREEN: string;
    colorLIGHT: string;
    colorORANGE: string;
    colorRED: string;
    ellipsis: string;
    info: string;
    main: string;
    numbers: string;
    root: string;
  }
}

declare const DefaultScssModule: DefaultScssNamespace.IDefaultScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DefaultScssNamespace.IDefaultScss;
};

export = DefaultScssModule;
