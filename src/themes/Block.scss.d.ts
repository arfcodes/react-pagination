declare namespace BlockScssNamespace {
  export interface IBlockScss {
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

declare const BlockScssModule: BlockScssNamespace.IBlockScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BlockScssNamespace.IBlockScss;
};

export = BlockScssModule;
