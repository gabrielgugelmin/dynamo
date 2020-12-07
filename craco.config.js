const path = require('path');

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
};
