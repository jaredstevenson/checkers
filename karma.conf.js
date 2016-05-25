var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    files: [ 'test/model.js'],
    frameworks: ['mocha', 'chai'],
    autoWatch: true,
    preprocessors: {


      'test/model.js': ['webpack']
    },
    webpack: {
      module: webpackConfig.module
    },
    browsers: ['Chrome']
  });
};
