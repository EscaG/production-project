import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelloader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

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
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const scssLoader = buildCssLoaders(isDev);

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxBabelLoader,
    scssLoader,
  ];
}
