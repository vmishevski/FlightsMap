process.env.NODE_ENV = 'development';
import commonConfig from './webpac.common';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

export default (opt) => {
  return webpackMerge(commonConfig(opt), <webpack.Configuration> {});
}
