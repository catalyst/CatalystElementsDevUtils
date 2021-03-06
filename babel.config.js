module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      targets: {
        node: 8
      }
    }],
    '@babel/preset-typescript'
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  };
};
