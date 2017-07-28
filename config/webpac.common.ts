import * as webpack from 'webpack';
import * as path from 'path';

export default function (opt) {
  return <webpack.Configuration>{
    entry: {
      server: './app/server.ts'
    },
    output: {
      path: path.resolve('./dist'),
      filename: '[name].js',
      sourceMapFilename: '[filename].map'
    },
    target: 'node',
    plugins: [],
    module: <webpack.NewModule>{
      rules: [
        {test:  /\.tsx?$/, loader: 'ts-loader'}
      ]
    }
  }
}
