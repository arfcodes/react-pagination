declare namespace BlockScssNamespace {
  export interface IBlockScss {
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

declare const BlockScssModule: BlockScssNamespace.IBlockScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BlockScssNamespace.IBlockScss;
};

export = BlockScssModule;
