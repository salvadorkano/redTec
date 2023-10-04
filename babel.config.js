module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['.src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
        alias: {
          colors: './src/assets/colors',
          fonts: './src/assets/fonts',
          icons: './src/assets/icons',
          images: './src/assets/images',
          components: './src/components',
          redux: './src/redux',
          router: './src/router',
          screens: './src/screens',
          utils: './src/utils',
          styles: './src/styles',
        },
      },
    ],
  ],
};
