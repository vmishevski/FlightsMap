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
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.ts', '.json']
    },
    module: <webpack.NewModule> {
      rules: [
        {test:  /\.tsx?$/, loader: 'ts-loader'}
      ]
    },
    node: {
      __dirname: false,
      __filename: false,
      console: false,
      process: false,
      global: false
    }
  }
}
