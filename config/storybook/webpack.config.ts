import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default function ({ config }: { config: webpack.Configuration }) {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    buildLocales: '',
    locales: '',
  };

  // config.plugins!.push(new webpack.DefinePlugin({
  //   __IS_DEV__: JSON.stringify(true),
  // }));

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ];

  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module!.rules!.push(buildCssLoaders(true));

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
}
