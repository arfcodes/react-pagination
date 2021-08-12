module.exports = {
  core: {
    "builder": "webpack5",
  },
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook/addon-postcss"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
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
    });
    config.module.rules.push({
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
    });

    // Return the altered config
    return config;
  },
}