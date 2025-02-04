const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-native$': 'react-native-web', // Alias React Native for Web
      'react-native-vector-icons': '@expo/vector-icons', // Alias vector icons
    },
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'], // Web compatibility
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!react-native-vector-icons)/, // Include vector icons for transpilation
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              [
                'module-resolver',
                {
                  alias: {
                    '^react-native$': 'react-native-web',
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // Inline small fonts as data URIs
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]', // Preserve font file names
            },
          },
        ],
        include: [
          path.resolve(__dirname, 'node_modules/react-native-vector-icons/Fonts'),
          path.resolve(__dirname, 'node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts'),
        ],
      },
    ],
  },
};
