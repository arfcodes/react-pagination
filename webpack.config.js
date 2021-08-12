const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: [path.join(__dirname, 'src/index.ts')],
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'IznReactPagination',
    libraryTarget: 'umd',
    filename: 'index.js',
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'silent',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader', 
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  target: 'node',
  devtool: 'source-map',
});
