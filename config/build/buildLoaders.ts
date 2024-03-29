import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
// import { buildBabelLoader } from './loaders/buildBabelloader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp|woff|woff2|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = buildCssLoaders(isDev);
  // const babelLoader = buildBabelLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    typeScriptLoader,
    scssLoader,
  ];
}
