declare namespace ThemeScssNamespace {
  export interface IThemeScss {
    button: string;
    buttonActive: string;
    buttonDirectory: string;
    ellipsis: string;
  }
}

declare const ThemeScssModule: ThemeScssNamespace.IThemeScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ThemeScssNamespace.IThemeScss;
};

export = ThemeScssModule;
