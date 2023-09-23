module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      use: 'file?name=fonts/[name].[ext]!static'
    });
    return config;
  }
};