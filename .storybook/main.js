const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.story.tsx",
    "../src/**/*.story.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@design-tokens': path.resolve(__dirname, '../src/design-tokens'),
      '@global': path.resolve(__dirname, "../src/global"),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@templates': path.resolve(__dirname, '../src/components/templates'),
      '@pages': path.resolve(__dirname, '../src/components/pages'),
    };
    return config;
  }
};
