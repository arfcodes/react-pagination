declare namespace MainScssNamespace {
  export interface IMainScss {
    content: string;
    inner: string;
    main: string;
    root: string;
  }
}

declare const MainScssModule: MainScssNamespace.IMainScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainScssNamespace.IMainScss;
};

export = MainScssModule;
