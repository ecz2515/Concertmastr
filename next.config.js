module.exports = {
    webpack: (config) => {
      config.resolve.alias['react-native-vector-icons'] = '@expo/vector-icons';
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/@expo\/vector-icons/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
      return config;
    },
    webpack5: true,
    // Ignore font files
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'null-loader'
        }
      });
      return config;
    }
  };