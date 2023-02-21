import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

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

  const babelLoader = {
    test: /\.(js|ts|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = buildCssLoaders(isDev);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    scssLoader,
  ];
}
