declare namespace LineScssNamespace {
  export interface ILineScss {
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
    info: string;
    main: string;
    numbers: string;
    root: string;
  }
}

declare const LineScssModule: LineScssNamespace.ILineScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LineScssNamespace.ILineScss;
};

export = LineScssModule;
