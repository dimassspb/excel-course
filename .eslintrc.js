module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
      sourceType: 'module',
    },
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: 'google',
};
