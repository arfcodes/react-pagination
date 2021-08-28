declare namespace ResetScssNamespace {
  export interface IResetScss {
    app: string;
  }
}

declare const ResetScssModule: ResetScssNamespace.IResetScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ResetScssNamespace.IResetScss;
};

export = ResetScssModule;
